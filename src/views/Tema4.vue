<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Integración de IA 

    img(src="@/assets/curso/tema4/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 La integración de la inteligencia artificial (IA) en la atención al cliente consiste en la incorporación estratégica de sistemas inteligentes que interactúan con los procesos humanos y tecnológicos de la organización, con el objetivo de incrementar la eficiencia operativa, optimizar la gestión de consultas y solicitudes, y brindar experiencias más personalizadas y consistentes al cliente. La IA facilita la automatización de tareas repetitivas, permite la priorización de casos críticos mediante análisis de datos en tiempo real y proporciona información relevante para la toma de decisiones, manteniendo la supervisión y el control del talento humano en la interacción con los usuarios. 

    separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Estrategias de implementación

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de IA en la atención al cliente consiste en planificar, ejecutar y supervisar la adopción de herramientas inteligentes, asegurando que la tecnología complemente al personal humano, optimice procesos y mejore la experiencia del cliente. A continuación, se muestran en tabla estrategias y beneficios de la implementación de IA. 

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Estrategias y beneficios de la implementación de IA
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-2
          table
            caption Nota. Adaptada de Marr, B., (2020).   
            thead
              tr(style="background-color: #F3F6FE")
                th Estrategia 
                th(colspan="2") Descripción
                th(colspan="2") Beneficio
            tbody
              tr(style="background-color: #E8EFFE")
                td #[strong Implementación gradual]
                td(colspan="2") Introducir IA por etapas, comenzando con pruebas piloto 
                td(colspan="2") Reduce riesgos y permite ajustes progresivos 
              tr
                td #[strong Personalización del sistema]
                td(colspan="2") Ajustar #[em chatbots] y analítica según el perfil del cliente 
                td(colspan="2") Mejora la experiencia y fidelización 
              tr(style="background-color: #E8EFFE")
                td #[strong Capacitación continua]
                td(colspan="2") Formar al personal en el uso y supervisión de herramientas IA 
                td(colspan="2") Garantiza interacción efectiva y ética con clientes 
              tr
                td #[strong Monitoreo y retroalimentación]
                td(colspan="2") Revisar resultados y ajustar procesos según métricas 
                td(colspan="2") Optimiza rendimiento y satisfacción del cliente 
              tr(style="background-color: #E8EFFE")
                td #[strong Integración con sistemas existentes]
                td(colspan="2") Conectar IA con CRM y otros sistemas internos 
                td(colspan="2") Mejora eficiencia operativa y consistencia de datos

    .bg-contenido-a10.p-4.py-3.rounded-4.z-2
      p.mb-0 Una empresa de telecomunicaciones implementa primero un #[em chatbot] para consultas frecuentes, capacita al personal en escalamiento de casos complejos, monitorea indicadores de satisfacción y luego despliega análisis predictivo para personalizar ofertas. 

    separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Capacitación y gestión del cambio 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La implementación de inteligencia artificial (IA) en la atención al cliente requiere una planificación estratégica en términos de capacitación y gestión del cambio, ya que la efectividad de los sistemas depende tanto de la tecnología, así como del personal que la supervisa.
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          p.mb-0 La capacitación del personal debe ir más allá de la operación básica de herramientas y centrarse en el desarrollo de competencias analíticas, técnicas y de toma de decisiones. Esto incluye enseñar a los equipos de atención a supervisar, interpretar y complementar las acciones de los sistemas inteligentes, asegurando que la automatización se utilice de manera eficiente y ética. 
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p El entrenamiento debe cubrir el manejo de #[em chatbots], automatización de procesos, análisis de emociones y gestión de datos de clientes, con ejercicios prácticos, simulaciones y talleres que permitan al personal enfrentarse a escenarios reales y situaciones complejas. 
        .bg-secundario-s5.rounded-4.p-4.py-3.mb-3
          p.mb-0 La ética y la privacidad son componentes esenciales de la formación, instruyendo al personal sobre el manejo responsable de la información del cliente y el cumplimiento de normativas legales y políticas internas de seguridad de datos. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/4.png", alt="")

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 4.
      span Capacitación y gestión del cambio
    img.mb-4.z-2(data-aos="fade-up", src="@/assets/curso/tema4/5.png", alt="La figura presenta los principales elementos que deben considerarse para facilitar la capacitación y la gestión del cambio durante la incorporación de inteligencia artificial en los procesos de atención al cliente. Integra aspectos relacionados con la planificación, formación del personal, uso responsable de la información, participación humana, seguimiento del desempeño y fortalecimiento de habilidades. Además, destaca la importancia de comunicar los cambios y acompañar a los colaboradores para favorecer una adopción adecuada de las nuevas tecnologías.")

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Otra estrategia importante es la gestión de escalamiento, que capacita a los empleados para identificar con precisión cuándo derivar un caso a un asesor humano, asegurando la continuidad y la calidad del servicio. Esto se refuerza mediante #[em role play], guías de procedimiento y simulaciones que reflejan situaciones críticas de atención al cliente. 
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          p.mb-0 La capacitación también debe incluir seguimiento y evaluación continua: establecer indicadores de desempeño individual y grupal, retroalimentación regular y métricas de interacción con los sistemas de IA. Esto permite identificar brechas en las competencias del personal y diseñar planes de mejora continua, fomentando un aprendizaje adaptativo y sostenible. 
    .row.justify-content-center.align-items-center.z-2
      .col-lg-7
        p Además, se recomienda fortalecer habilidades blandas complementarias, como comunicación efectiva, empatía y resolución de conflictos, que son cruciales cuando los asesores intervienen en casos que requieren juicio humano y atención personalizada. La comunicación interna, charlas motivacionales y sesiones de #[em feedback] continuo ayudan a consolidar la cultura de innovación y colaboración humano-IA dentro de la organización.
        .bg-secundario-s5.rounded-4.p-4.py-3.mb-3
          p.mb-0 Finalmente, la gestión del cambio debe estar alineada con la capacitación, comunicando claramente los objetivos de la IA, los beneficios para clientes y empleados, y las expectativas sobre la interacción humano-máquina. Identificar resistencias, crear planes de apoyo y establecer protocolos claros garantiza que la adopción tecnológica se haga de manera ordenada, ética y eficiente. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/7.png", alt="")

    separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Medición y optimización 

    img(src="@/assets/curso/tema4/8.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 Para garantizar el éxito de la implementación de la IA en la atención al cliente, es fundamental establecer un sistema de evaluación permanente que permita medir resultados, analizar métricas clave y aplicar mejoras continuas en los procesos. El monitoreo constante facilita identificar oportunidades de optimización, detectar fallas en la automatización y fortalecer la integración entre sistemas tecnológicos y asesores humanos. Entre los indicadores clave tenemos:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        .bg-slider.p-4.z-2.rounded-1
          SlyderA(tipo="b")
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Tiempo de respuesta promedio 
              p.mb-0 Mide el tiempo promedio transcurrido desde que el cliente realiza una solicitud hasta que recibe una primera respuesta. 
              p.mb-0 #[strong Ejemplo]: un asistente virtual responde las consultas en un promedio de 45 segundos. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Nivel de satisfacción del cliente (NPS, encuestas) 
              p.mb-0 Evalúa la percepción del cliente sobre la experiencia recibida mediante encuestas, escalas de satisfacción o indicadores como el NPS. 
              p.mb-0 #[strong Ejemplo]: después de la atención, una encuesta permite conocer la valoración del cliente y su disposición a recomendar el servicio. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Número de interacciones resueltas por IA 
              p.mb-0 Cuantifica las solicitudes que la IA atiende y soluciona satisfactoriamente sin requerir la intervención de un asesor humano. 
              p.mb-0 #[strong Ejemplo]: durante una semana, el asistente virtual resuelve 850 consultas frecuentes sin escalarlas a un asesor. 
            .tarjeta.tarjeta--blanca.p-lg-4.rounded-4.p-lg-5
              h5.mb-4 Eficiencia en la resolución de quejas 
              p.mb-0 Evalúa la capacidad del proceso para solucionar quejas de manera oportuna y efectiva, considerando aspectos como tiempo, casos resueltos y necesidad de escalamiento. 
              p.mb-0 #[strong Ejemplo]: la empresa analiza cuántas quejas fueron solucionadas dentro del tiempo establecido y sin requerir reapertura del caso. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/9.png", alt="" data-aos="zoom-in-down")
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La siguiente tabla presenta la relación entre algunos indicadores clave de desempeño en la atención al cliente apoyados por inteligencia artificial, los objetivos que se esperan alcanzar y las acciones que pueden implementarse para optimizar sus resultados. Su análisis permite identificar oportunidades de mejora en la rapidez del servicio, satisfacción del cliente, capacidad de resolución de la IA, escalamiento de casos y eficiencia de los procesos internos.  


    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Indicadores y objetivos de optimización de IA 
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-2
          table
            caption Nota. Adaptada de Marr, B., (2020).   
            thead
              tr(style="background-color: #F3F6FE")
                th Indicador 
                th(colspan="2") Objetivo
                th(colspan="2") Acción de optimización 
            tbody
              tr(style="background-color: #E8EFFE")
                td #[strong Tiempo de respuesta]
                td(colspan="2") Reducir al mínimo la espera del cliente 
                td(colspan="2") Ajuste de respuestas automáticas y priorización de consultas 
              tr(style="background-color: #FFFFFF")
                td #[strong Satisfacción del cliente ]
                td(colspan="2") Alcanzar altos niveles de fidelización 
                td(colspan="2") Personalización de interacciones y seguimiento postventa 
              tr(style="background-color: #E8EFFE")
                td #[strong Resoluciones por IA]
                td(colspan="2") Maximizar interacciones resueltas sin intervención humana 
                td(colspan="2") Capacitación y ajuste de #[em chatbots] 
              tr(style="background-color: #FFFFFF")
                td #[strong Escalamiento a humanos]
                td(colspan="2") Garantizar atención eficiente en casos complejos 
                td(colspan="2") Mejora de protocolos y entrenamiento del personal 
              tr(style="background-color: #E8EFFE")
                td #[strong Procesos internos]
                td(colspan="2") Optimizar operaciones y registro de datos 
                td(colspan="2") Integración con CRM y análisis de desempeño 


    p.mb-4.mb-lg-5.z-2 Un #[em call center] mide el tiempo de respuesta y satisfacción del cliente tras implementar IA, ajusta los #[em chatbots] y programas de capacitación, y logra reducir un 30 % los tiempos de atención y aumentar la satisfacción general. 

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .tarjeta.bg-terciario.p-4.py-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Integración de IA en el trabajo: claves para una convergencia humano-IA exitosa
                  p.mb-0 Se recomienda consultar la siguiente lectura, la cual presenta estrategias para implementar la inteligencia artificial en las organizaciones, fortalecer la colaboración entre las personas y la tecnología, optimizar procesos y apoyar la toma de decisiones en entornos laborales. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://soaint.com/blog/integracion-de-ia-en-el-trabajo/" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    .row.justify-content-center.z-2.mb-5
      .col-lg-10.col-xl-8
        .bg-audio.rounded-4.p-4.p-lg-5
          .row.align-items-center.justify-content-center
            .col-8.col-sm-3
              figure
                img.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-9
              p A continuación, lo invitamos a consultar el siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="IA en la atención al cliente: apoyo, no reemplazo"
                tiempo
                :audio="require_src('@/assets/curso/podcast/63110197_CF02_Podcast_02.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
