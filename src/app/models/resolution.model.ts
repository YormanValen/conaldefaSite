export class Resolution {
    id?: number;
    title: string;
    content: string;
    resolution_date: string;
    pdf_file?: string; // Añadir la propiedad pdf_file
    created_at?: string;
    updated_at?: string;
  
    constructor(data: any) {
      this.id = data.id;
      this.title = data.title;
      this.content = data.content;
      this.resolution_date = data.resolution_date;
      this.pdf_file = data.pdf_file; // Inicializar la propiedad pdf_file
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
    }
  }
  