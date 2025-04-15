export class Noticia {
  id?: number;
  titulo: string;
  contenido: string;
  imagen_url: string;
  fecha_publicacion: string;
  created_at?: string;
  updated_at?: string;

  constructor(data: any) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.contenido = data.contenido;
    this.imagen_url = data.imagen_url;
    this.fecha_publicacion = data.fecha_publicacion;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
