// Pixel tracking and conversion management
export interface ConversionEvent {
  eventType: 'quiz_start' | 'quiz_complete' | 'email_capture' | 'plan_view' | 'plan_click' | 'purchase';
  userId?: string;
  sessionId: string;
  timestamp: string;
  metadata?: Record<string, any>;
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;
}

export interface PixelData {
  pixelId: string;
  eventName: string;
  eventData: Record<string, any>;
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  };
}

export class ConversionTracker {
  private pixelId: string;

  constructor() {
    this.pixelId = process.env.CONVERSION_PIXEL_ID || '';
  }

  // Track conversion events
  async trackConversion(event: ConversionEvent): Promise<void> {
    try {
      // Log event for analytics
      console.log('Conversion Event:', {
        type: event.eventType,
        sessionId: event.sessionId,
        timestamp: event.timestamp,
        metadata: event.metadata
      });

      // Send to conversion pixel if configured
      if (this.pixelId) {
        await this.sendToPixel(event);
      }

      // Store in local analytics
      await this.storeEvent(event);

    } catch (error) {
      console.error('Tracking error:', error);
    }
  }

  private async sendToPixel(event: ConversionEvent): Promise<void> {
    const pixelData = this.formatPixelData(event);
    
    // Facebook Pixel format (most common)
    if (this.pixelId.length > 10) {
      await this.sendToFacebookPixel(pixelData);
    }
    // Google Ads format
    else {
      await this.sendToGoogleAds(pixelData);
    }
  }

  private formatPixelData(event: ConversionEvent): PixelData {
    const eventMapping: Record<string, string> = {
      'quiz_start': 'InitiateCheckout',
      'quiz_complete': 'CompleteRegistration',
      'email_capture': 'Lead',
      'plan_view': 'ViewContent',
      'plan_click': 'AddToCart',
      'purchase': 'Purchase'
    };

    return {
      pixelId: this.pixelId,
      eventName: eventMapping[event.eventType] || 'CustomEvent',
      eventData: {
        content_category: 'pet_care',
        content_name: 'petzia_quiz',
        value: this.getEventValue(event.eventType),
        currency: 'BRL',
        custom_data: event.metadata
      },
      userData: this.extractUserData(event)
    };
  }

  private getEventValue(eventType: string): number {
    const values: Record<string, number> = {
      'quiz_start': 5,
      'quiz_complete': 15,
      'email_capture': 25,
      'plan_view': 35,
      'plan_click': 50,
      'purchase': 100
    };
    return values[eventType] || 0;
  }

  private extractUserData(event: ConversionEvent): PixelData['userData'] {
    return {
      email: event.metadata?.email,
      firstName: event.metadata?.firstName,
      lastName: event.metadata?.lastName
    };
  }

  private async sendToFacebookPixel(data: PixelData): Promise<void> {
    try {
      // Facebook Conversions API
      const response = await fetch(`https://graph.facebook.com/v18.0/${data.pixelId}/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.FACEBOOK_ACCESS_TOKEN}` // Would need this token
        },
        body: JSON.stringify({
          data: [{
            event_name: data.eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            custom_data: data.eventData,
            user_data: data.userData
          }]
        })
      });

      if (!response.ok) {
        console.error('Facebook Pixel error:', await response.text());
      }
    } catch (error) {
      console.error('Facebook Pixel sending failed:', error);
    }
  }

  private async sendToGoogleAds(data: PixelData): Promise<void> {
    try {
      // Google Ads would require different implementation
      console.log('Would send to Google Ads:', data);
    } catch (error) {
      console.error('Google Ads sending failed:', error);
    }
  }

  private async storeEvent(event: ConversionEvent): Promise<void> {
    // Store in memory or database for analytics
    // This would be expanded based on storage needs
    console.log('Stored conversion event:', event.eventType);
  }

  // Generate session ID for tracking
  static generateSessionId(): string {
    return 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Track quiz funnel progression
  async trackQuizFunnel(step: string, sessionId: string, metadata?: Record<string, any>): Promise<void> {
    const event: ConversionEvent = {
      eventType: step as any,
      sessionId,
      timestamp: new Date().toISOString(),
      metadata
    };

    await this.trackConversion(event);
  }
}

// Singleton instance
export const conversionTracker = new ConversionTracker();

// Client-side pixel injection helper
export function generatePixelScript(pixelId: string): string {
  return `
    <!-- Conversion Pixel -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    </script>
    <noscript>
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>
    </noscript>
  `;
}