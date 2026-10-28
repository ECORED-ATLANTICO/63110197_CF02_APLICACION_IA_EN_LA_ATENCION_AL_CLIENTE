export default {
  global: {
    Name: 'Estrategias de atención al cliente con IA',
    Description:
      'Este componente formativo orienta al aprendiz en la aplicación de la inteligencia artificial en la atención al cliente, mediante el uso de herramientas digitales y estrategias que mejoran la experiencia, la satisfacción, la fidelización y la optimización continua del servicio, considerando principios éticos y de privacidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Experiencia con IA ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Satisfacción y fidelización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Personalización y análisis de emociones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Quejas y ética con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Resolución de problemas y escalamiento',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Privacidad, sesgos y transparencia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tendencias y casos con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'IA avanzada y nuevas tecnologías',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Ejemplos empresariales y estrategias',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Integración de IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estrategias de implementación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Capacitación y gestión del cambio',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Medición y optimización',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63110197_CF02_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de instrucciones o reglas que permiten a un sistema de IA procesar información y tomar decisiones automatizadas.',
    },
    {
      termino: 'Análisis de emociones',
      significado:
        'Técnica utilizada por la IA para identificar y evaluar emociones de los clientes a través de datos textuales, de voz o faciales.',
    },
    {
      termino: 'Automatización',
      significado:
        'Uso de tecnología para realizar procesos sin intervención humana, aumentando eficiencia y reduciendo errores en atención al cliente.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'Conjunto de datos masivos y variados que permiten a la IA aprender patrones de comportamiento de los clientes.',
    },
    {
      termino: '<em>Chatbot</em>',
      significado:
        'Asistente virtual basado en IA que interactúa automáticamente con los clientes a través de texto o voz.',
    },
    {
      termino: 'CRM (<em>Customer relationship management</em>)',
      significado:
        'Sistema de gestión de relaciones con clientes que permite integrar información de interacción y mejorar la experiencia.',
    },
    {
      termino: 'Datos personales',
      significado:
        'Información que identifica o permite identificar a una persona, protegida por normas de privacidad.',
    },
    {
      termino: 'Escalamiento',
      significado:
        'Proceso mediante el cual un caso o consulta se transfiere de un sistema automatizado a un asesor humano.',
    },
    {
      termino: 'Experiencia del cliente (<em>Customer experience</em>)',
      significado:
        'Conjunto de percepciones y emociones de un cliente al interactuar con una empresa o servicio.',
    },
    {
      termino: 'Filtros de IA',
      significado:
        'Herramientas de clasificación y priorización de información utilizadas por sistemas de atención automatizados.',
    },
    {
      termino: 'IA (inteligencia artificial)',
      significado:
        'Tecnología que permite a sistemas informáticos imitar funciones cognitivas humanas como aprendizaje, análisis y toma de decisiones.',
    },
    {
      termino: 'Implementación',
      significado:
        'Proceso de integrar un sistema de IA en los canales y procesos de atención al cliente de una organización.',
    },
    {
      termino: 'Indicadores de desempeño (KPI)',
      significado:
        'Métricas utilizadas para medir la efectividad de los procesos de atención y satisfacción del cliente.',
    },
    {
      termino: 'Integración tecnológica',
      significado:
        'Combinación de herramientas digitales y sistemas de IA con los procesos humanos para atención al cliente.',
    },
    {
      termino: '<em>Machine learning</em> (aprendizaje automático)',
      significado:
        'Rama de la IA que permite a los sistemas aprender automáticamente de los datos y mejorar su desempeño.',
    },
    {
      termino: 'Mitos de la IA',
      significado:
        'Creencias erróneas o exageradas sobre capacidades y riesgos de la inteligencia artificial.',
    },
    {
      termino: 'Personalización',
      significado:
        'Capacidad de adaptar productos, servicios o interacciones según las necesidades, preferencias o comportamientos del cliente.',
    },
    {
      termino: 'Privacidad de datos',
      significado:
        'Protección de la información personal de los clientes frente a accesos no autorizados o mal uso.',
    },
    {
      termino: 'Procesamiento de lenguaje natural (PLN)',
      significado:
        'Técnica de IA que permite comprender, interpretar y generar lenguaje humano de manera automática.',
    },
    {
      termino: 'Reclamo',
      significado:
        'Manifestación de insatisfacción de un cliente respecto a un producto, servicio o atención recibida.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Capacidad de identificar, analizar y solucionar conflictos o incidencias durante la atención al cliente.',
    },
    {
      termino: 'Sesgo de IA',
      significado:
        'Distorsión en los resultados de un sistema de IA debido a datos incompletos o mal representados durante su entrenamiento.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Medida del grado en que un producto o servicio cumple o excede las expectativas del cliente.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Práctica de comunicar claramente cómo funcionan los sistemas de IA y cómo se usan los datos de los clientes.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Proceso de integración de tecnologías digitales, incluyendo IA, en todas las áreas de la empresa para optimizar operaciones y experiencia del cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adamssen, J. (2020). Inteligencia artificial: aprender sobre <em>chatbots</em>, robótica y otras aplicaciones comerciales. Efalon Acies.',
      link: '',
    },
    {
      referencia:
        'Adereso AI. (2025). Cómo la inteligencia artificial puede mejorar la eficiencia en la atención al cliente. Adereso AI.',
      link: 'https://adereso.ai/wp-content/uploads/2025/02/ebook-atencion-al-cliente-ai_compressed.pdf',
    },
    {
      referencia:
        'Acosta Aguinaga, K. R. (2024). Inteligencia artificial (IA) y experiencia del cliente desde el año 2016: Revisión de bibliografía. Revista de Ciencias y Artes, 2(1), 1-17.',
      link: 'https://doi.org/10.37211/2789.1216.v2.n1.51',
    },
    {
      referencia:
        'Arlenet Peña Zerpa, C., & Peña Zerpa, M. Y. (2024). Inteligencia Artificial en la atención al cliente de salas de cine: Beneficios y riesgos emergentes. Sociedad & Tecnología, 8(4), e662.',
      link: 'https://doi.org/10.51247/st.v8i4.662',
    },
    {
      referencia:
        'Bustos García, A. F., Ramírez Cardona, A. N., & Suárez Grisales, J. V. (2021). Inteligencia artificial como optimizador de procesos para atención al cliente [Capítulo de libro, Universidad].',
      link: '',
    },
    {
      referencia:
        'Coronado García, B. (2025). Inteligencia artificial aplicada al comercio. Ediciones de la U / Ra-ma Editorial.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático logística',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo ',
          cargo: 'Experto temático comercio y servicio',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
