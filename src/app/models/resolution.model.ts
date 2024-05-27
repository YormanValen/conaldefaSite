export class Resolution {
    id?: number;
    title: string;
    content: string;
    resolution_date: string;
    created_at?: string;
    updated_at?: string;
  
    constructor(data: any) {
      this.id = data.id;
      this.title = data.title;
      this.content = data.content;
      this.resolution_date = data.resolution_date;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
  