import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class QuienesSomosComponent implements OnInit {
  expandedCard: string | null = null;

  historyCards = [
    {
      id: '1983',
      year: '1983',
      title: 'Gestión y aprobación de la facultad de desarrollo familiar',
      description:
        'Acta 016 (marzo 15 de 1983) Consejo Superior, Universidad de Caldas Acuerdo 295 de Diciembre 14 de 1983',
    },
    {
      id: '1984',
      year: '1984',
      title: 'Ingreso de primeros estudiantes',
      description: 'Currículo en prueba',
    },
    {
      id: '1988',
      year: '1988',
      title: 'Primera promocion de Desarrolo Familiar en la Universidad de Caldas',
      description: '',
    },
    {
      id: '1992',
      year: '1992',
      title: 'Creación del programa de Desarrollo Familiar en la Universidad Católica Luis Amigó',
      description: '',
    },
    {
      id: '1998',
      year: '1998',
      title: 'LEY 429 DE 1998',
      description: 'Reglamento del ejercicio de la Profesión en Desarrollo Familiar',
    },
    {
      id: '2009',
      year: '2009',
      title: 'LEY 1361 DE 2009',
      description: 'Ley de Protección Integral a la Familia',
    },
    {
      id: '2014',
      year: '2014',
      title: 'Demanda inconstitucionalidad Ley 1098 por vulnerar el derecho al trabajo de lxs Profesionales en Desarrollo familiar',
      description: 'CLÍNICA SOCIO-JURIDÍCA DE LA UNIVERSIDAD DE CALDAS',
    },
    {
      id: '2014',
      year: '2014',
      title: 'Sentencia C-505/14 de la Corte Constitucional, que declara inconstitucional los artículo 73, 79 y 84.',
      description: 'Comités de Adopción, Comisarias y Defensorías de Familia.',
    },
    {
      id: '2018',
      year: '2018',
      title: 'Creación del Colegio de Profesionales',
      description: '',
      imagen: 'assets/img/logo.png',
    },
    {
      id: '2021',
      year: '2021',
      title: ' Incorporación en la ley 2126 sobre Comisarías de Familia, el perfil profesional en Desarrollo Familiar',
      description: '',
    },
    {
      id: '2023',
      year: '2023',
      title: 'LEY 2336 DE 2023 -O ctubre 11',
      description: 'Por medio de la cual se dicta normas para el ejercicio de la profesión de desarrollo familiar, se expide el código deontológico y ético, se le otorgan facultades al colegio nacional de profesionales en desarrollo familiar, se deroga la ley 429 de 1998 y se dictan otras disposiciones relativas al ejercicio de la profesión',
    }

  ];

  toggleCard(cardId: string): void {
    this.expandedCard = this.expandedCard === cardId ? null : cardId;
  }

  isExpanded(cardId: string): boolean {
    return this.expandedCard === cardId;
  }

  members = [
    {
      img: '/assets/img/nuestra_junta/gabriel.png',
      name: 'Gabriel Gallego Montes',
      position: 'Presidente',
      education:
        'Doctor en Estudios de Población, El Colegio de México; Magíster en Planeación y Administración del Desarrollo Regional, CIDER, Universidad de los Andes; Profesional en Desarrollo Familiar, Universidad de Caldas.',
      experience:
        'Docente en la Universidad de Caldas, Coordinador de Maestría en Género, y Presidente de CONALDEFA. Especializado en desarrollo familiar y evaluación de proyectos agropecuarios.',
    },
    {
      img: '/assets/img/nuestra_junta/carmenza.png',
      name: 'Maria Carmenza Quintero Cardona',
      position: 'Vicepresidenta',
      education: 'Especialista en Alta Gerencia; Profesional en Desarrollo Familiar.',
      experience: 'Docente universitaria, coordinadora de proyectos sociales, y experiencia en el Instituto Colombiano de Bienestar Familiar y otras entidades. Enfocada en la atención a la primera infancia y adolescencia.',
    },
    {
      img: '/assets/img/nuestra_junta/mariana.png',
      name: 'Mariana Ocampo Díaz ',
      position: 'Secretaria',
      education: 'Profesional en Desarrollo Familiar.',
      experience: 'Experta en intervención familiar con roles importantes en ICBF y el Centro de Desarrollo Comunitario Versalles, enfocada en la prevención de violencia intrafamiliar y el desarrollo de proyectos sociales.',
    },
    {
      img: '/assets/img/nuestra_junta/mariaVictoria.png',
      name: 'María Victoria Álvarez Vélez',
      position: 'Presidente suplente',
      education: 'Profesional en Desarrollo Familiar; Especialista en Docencia e Investigación Universitaria, Gestión y Desarrollo Humano, y Gestión Educativa.',
      experience: 'Amplia trayectoria en el trabajo con familias y adolescentes, tanto en el sector público como privado, con experiencia en administración y docencia universitaria.',
    },
    {
      img: '/assets/img/nuestra_junta/ocar.png',
      name: 'Oscar Emilio Gómez Uribe',
      position: 'Secretario suplente',
      education: 'Profesional en Desarrollo Familiar; Maestría en Estudios Teológicos; Diplomado en Libertad Religiosa y Consejería Bíblica.',
      experience: 'Pastor y presidente de la corporación Adonai Vida y Dignidad, con habilidades en comunicación, liderazgo y trabajo comunitario.',
    },
    {
      img: '/assets/img/nuestra_junta/ovidio.png',
      name: 'Ovidio Herrera Rivera ',
      position: 'Vicepresidente suplente',
      education: 'Doctor en Pensamiento Complejo; Magíster en Educación; Especialista en Docencia Investigativa Universitaria y Terapia Familiar; Profesional en Desarrollo Familiar.',
      experience: 'Docente investigador en la Universidad Católica Luis Amigó, con enfoque en calidad de vida y desarrollo familiar.',
    },
    {
      img: '/assets/img/nuestra_junta/edison.png',
      name: 'Edinson Hernán Restrepo',
      position: 'Tesorero suplente ',
      education: 'Magister en Derecho Univ. Luis Amigó, (2024). Abogado, Univ. Luis Amigó, (2018). Conciliador Extrajudicial en Derecho, Univ. Luis Amigó, (2017). (Esp. en Derecho Penal y Criminología. Univ. Luis Amigó, (2019).',
      experience: 'Profesional en Desarrollo Familiar. Fundación Univ. Luis Amigó, (2003). Diplomado en Pedagogía para Profesionales No Licenciados. Unaula. (2012). Teólogo con énfasis en Educación Cristiana. Seminario Bíblico de Colombia, (1994). Magister en Derecho Univ. Luis Amigó, (2024)',
    },
    {
      img: '/assets/img/nuestra_junta/mariaClemencia.png',
      name: 'Tesorera',
      position: 'María Clemencia Quintero ',
      education: 'Magíster en Educación y Desarrollo Humano; Especialista en Planeación para la Educación Ambiental; Profesional en Desarrollo Familiar.',
      experience: 'Amplia experiencia en el desarrollo de proyectos educativos y ambientales, con un enfoque en la participación y organización familiar.',
    },


  ];
  swiperConfig = {
    centeredSlides: true,
    paginationClickable: true,
    navigation: true, // Ajustar para activar la navegación
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3000, // Ajusta el tiempo de espera
      disableOnInteraction: false,
    },
    speed: 800, // Ajusta la velocidad del cambio de diapositiva
    effect: 'slide', // Si 'fade' te da problemas, usa 'slide'
    slidesPerView: 1,

  };

  constructor(private wowService: NgwWowService) { }

  ngOnInit() { }

  reset() { }
}
