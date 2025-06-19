// Client-side tracking utilities
export class ConversionTracking {
  private sessionId: string;
  private pixelId: string;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.pixelId = import.meta.env.VITE_CONVERSION_PIXEL_ID || '';
    this.initializePixel();
  }

  private getOrCreateSessionId(): string {
    let sessionId = sessionStorage.getItem('quiz_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('quiz_session_id', sessionId);
    }
    return sessionId;
  }

  private initializePixel(): void {
    if (this.pixelId && typeof window !== 'undefined') {
      // Facebook Pixel initialization
      if (!(window as any).fbq) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(script);
        
        (window as any).fbq = function() {
          const fbq = (window as any).fbq;
          fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
        };
        (window as any).fbq.push = (window as any).fbq;
        (window as any).fbq.loaded = true;
        (window as any).fbq.version = '2.0';
        (window as any).fbq.queue = [];
      }

      (window as any).fbq('init', this.pixelId);
      (window as any).fbq('track', 'PageView');
    }
  }

  async trackEvent(eventType: string, metadata?: Record<string, any>): Promise<void> {
    try {
      // Send to backend tracking
      await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-ID': this.sessionId
        },
        body: JSON.stringify({
          eventType,
          sessionId: this.sessionId,
          metadata: {
            ...metadata,
            url: window.location.href,
            referrer: document.referrer,
            timestamp: new Date().toISOString()
          }
        })
      });

      // Send to pixel if available
      if (this.pixelId && (window as any).fbq) {
        this.trackPixelEvent(eventType, metadata);
      }

    } catch (error) {
      console.error('Tracking error:', error);
    }
  }

  private trackPixelEvent(eventType: string, metadata?: Record<string, any>): void {
    const eventMapping: Record<string, string> = {
      'quiz_start': 'InitiateCheckout',
      'quiz_complete': 'CompleteRegistration',
      'email_capture': 'Lead',
      'plan_view': 'ViewContent',
      'plan_click': 'AddToCart',
      'purchase': 'Purchase'
    };

    const pixelEvent = eventMapping[eventType] || 'CustomEvent';
    const eventData = {
      content_category: 'pet_care',
      content_name: 'petzia_quiz',
      value: this.getEventValue(eventType),
      currency: 'BRL',
      ...metadata
    };

    (window as any).fbq('track', pixelEvent, eventData);
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

  // Specific tracking methods
  async trackQuizStart(): Promise<void> {
    await this.trackEvent('quiz_start');
  }

  async trackQuizComplete(answers: Record<number, any>): Promise<void> {
    await this.trackEvent('quiz_complete', { 
      totalAnswers: Object.keys(answers).length,
      completionTime: Date.now() - parseInt(this.sessionId.split('_')[1])
    });
  }

  async trackEmailCapture(email: string, petName: string): Promise<void> {
    await this.trackEvent('email_capture', { 
      email: email.substring(0, 5) + '***', // Partial email for privacy
      petName,
      hasEmail: true
    });
  }

  async trackPlanView(planType: string): Promise<void> {
    await this.trackEvent('plan_view', { planType });
  }

  async trackPlanClick(planType: string, price: string): Promise<void> {
    await this.trackEvent('plan_click', { 
      planType, 
      price,
      intent: 'purchase'
    });
  }

  async trackPurchase(planType: string, value: number): Promise<void> {
    await this.trackEvent('purchase', { 
      planType, 
      value,
      currency: 'BRL'
    });
  }

  getSessionId(): string {
    return this.sessionId;
  }
}

// Singleton instance
export const tracking = new ConversionTracking();