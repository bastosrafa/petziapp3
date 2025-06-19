declare module '@mailchimp/mailchimp_marketing' {
  interface Config {
    apiKey?: string;
    server?: string;
  }

  interface MergeFields {
    [key: string]: string;
  }

  interface Location {
    country_code?: string;
  }

  interface MemberData {
    email_address: string;
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
    merge_fields?: MergeFields;
    tags?: string[];
    location?: Location;
  }

  interface Member {
    id: string;
    email_address: string;
    status: string;
  }

  interface Lists {
    addListMember(listId: string, memberData: MemberData): Promise<Member>;
    updateListMember(listId: string, subscriberHash: string, updateData: Partial<MemberData>): Promise<Member>;
  }

  interface Ping {
    get(): Promise<{ health_status: string }>;
  }

  interface Utils {
    md5(input: string): string;
  }

  export function setConfig(config: Config): void;
  export const lists: Lists;
  export const ping: Ping;
  export const utils: Utils;
}