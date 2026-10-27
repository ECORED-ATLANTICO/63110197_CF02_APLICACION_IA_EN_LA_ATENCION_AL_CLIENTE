<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tendencias y casos con IA

    img(src="@/assets/curso/tema3/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 Las tendencias en inteligencia artificial muestran cómo las nuevas tecnologías transforman la atención al cliente y los procesos empresariales. Su aplicación permite optimizar servicios, personalizar experiencias y generar estrategias más efectivas, respaldadas por casos reales de empresas que integran IA avanzada en su operación. 

    separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 IA avanzada y nuevas tecnologías 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Las tendencias actuales en inteligencia artificial muestran innovaciones que transforman la atención al cliente y los procesos empresariales. Estas tecnologías permiten anticipar necesidades, personalizar experiencias y automatizar tareas, contribuyendo a decisiones más rápidas y eficientes sin reemplazar el talento humano. 
        .bg-terciario.rounded-4.p-4.py-3.mb-3
          p.mb-0 Entre las herramientas más relevantes se destacan el análisis predictivo, el aprendizaje profundo, los sistemas de recomendación, los #[em chatbots] inteligentes y el análisis de emociones, cada una con un impacto directo en la eficiencia, calidad del servicio y satisfacción del cliente. 
        p La siguiente tabla resume estas tecnologías, su función y los beneficios que aportan en la atención al cliente:  
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/2.png", alt="")

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Tecnologías de IA y beneficios en atención al cliente 
        .tabla-a.color-acento-contenido.tabla-a--text-left.mb-2
          table
            thead
              tr(style="background-color: #F3F6FE")
                th(colspan="2") Tecnología 
                th(colspan="3") Función 
                th(colspan="3") Ventaja en atención al cliente 
            tbody
              tr(style="background-color: #E8EFFE")
                td(colspan="2") #[strong IA predictiva]
                td(colspan="3") Anticipa necesidades del cliente usando datos históricos 
                td(colspan="3") Reduce tiempos de respuesta y aumenta la satisfacción 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong #[em Chatbots] avanzados]
                td(colspan="3") Responde consultas complejas y filtra información 
                td(colspan="3") Permite atención 24/7 y libera al personal humano 
              tr(style="background-color: #E8EFFE")
                td(colspan="2") #[strong Análisis de emociones]
                td(colspan="3") Detecta estado emocional y tono de interacción 
                td(colspan="3") Mejora la empatía y personalización en la atención 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Recomendaciones inteligentes]
                td(colspan="3") Sugiere productos o servicios según comportamiento 
                td(colspan="3") Incrementa la fidelización y las ventas 
              tr(style="background-color: #E8EFFE")
                td(colspan="2") #[strong Automatización de procesos]
                td(colspan="3") Optimiza tareas repetitivas y registros 
                td(colspan="3") Mejora eficiencia operativa y consistencia de servicio 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-terciario.rounded-4.p-4.py-3.mb-3
          p.mb-0 Un comercio electrónico integra IA predictiva y #[em chatbots] para sugerir productos personalizados según el historial de compras, aumentando la satisfacción del cliente y las ventas recurrentes. 

    separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Ejemplos empresariales y estrategias 

    p.mb-5.z-2 La aplicación de IA en empresas de distintos sectores demuestra cómo la combinación de tecnología y talento humano mejora la atención al cliente, optimiza procesos y fortalece la fidelización. 


    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo.bg-primario-p5
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon-2.png")
        h3.titulo-con-imagen__texto Ejemplos de empresas por sector 


    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4.px-4(titulo="Sector bancario")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Empresas como BBVA y Banco Santander utilizan #[em chatbots] inteligentes combinados con análisis de emociones. Esto permite identificar clientes frustrados o con problemas urgentes y priorizar su atención. Los casos complejos, como solicitudes de crédito especiales o reclamos por fraude, se derivan automáticamente a asesores humanos especializados, garantizando rapidez y calidad en el servicio.  
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/3.png', alt='')
      .py-3.py-md-4.px-4(titulo="Servicios públicos ")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Compañías como Acueducto de Bogotá y EPM aplican IA para automatizar respuestas a consultas frecuentes sobre facturación, cortes de servicio y trámites en línea. Cuando surgen quejas más complejas, el sistema deriva la información a personal capacitado, reduciendo tiempos de espera y evitando errores humanos.    
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/4.png', alt='')
      .py-3.py-md-4.px-4(titulo="<em>E-commerce</em>")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Plataformas como Amazon y Mercado Libre usan sistemas de recomendación que analizan el historial de compras y navegación de cada cliente. Esto permite sugerir productos, enviar recordatorios de ofertas y realizar seguimiento postventa. Gracias a esta personalización, los clientes reciben una experiencia adaptada, aumentando la fidelización y la probabilidad de recompra.   
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
      .py-3.py-md-4.px-4(titulo="Telecomunicaciones ")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Empresas como Claro y Movistar implementan #[em chatbots] multicanal capaces de responder preguntas sobre planes, facturación y servicios adicionales. Cuando se detectan consultas más específicas, como problemas técnicos o ajustes de contratos, la IA deriva la interacción a agentes especializados, manteniendo la eficiencia sin sacrificar la atención personalizada  
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')
      .py-3.py-md-4.px-4(titulo="Salud digital ")
        .row.align-items-center.justify-content-center
          .col-lg-7.mb-3.mb-lg-0
            p.mb-0 Instituciones como Salud Total EPS y Colsanitas utilizan IA para automatizar recordatorios de citas médicas, seguimiento de tratamientos y encuestas de satisfacción del paciente. Al analizar la información, pueden priorizar atención médica para pacientes con urgencias o que requieren seguimiento cercano, mejorando la experiencia y reduciendo la sobrecarga en los profesionales de la salud.   
          .col-sm-8.col-lg-4
            figure
              img(src='@/assets/curso/tema3/7.png', alt='')

    .bg-contenido-a5.rounded-4.p-4.py-3.mb-5
      p.mb-0 Sitio web de Movistar Colombia con información de planes móviles, internet, televisión, promociones y acceso a atención al cliente en línea. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo.bg-primario-p5
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon-2.png")
        h3.titulo-con-imagen__texto Estrategias recomendadas para aplicar IA 

    img(src="@/assets/curso/tema3/8.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 La aplicación de inteligencia artificial en la atención al cliente requiere estrategias que articulen tecnología, datos y participación humana de manera planificada. Su implementación debe orientarse a resolver necesidades reales, optimizar procesos, personalizar las interacciones y apoyar la toma de decisiones, garantizando al mismo tiempo la protección de los datos, la transparencia y el seguimiento de los resultados para fortalecer continuamente la experiencia del cliente. Entre los más comunes se encuentran:

    .fullwidth-bg.fullwidth-bg--2
    .bg-slider.bg-slider--xl.p-4.z-2.rounded-1.mb-4.mb-lg-5
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Integración de IA y talento humano 
              p.mb-4.mb-lg-0 La IA debe complementar al personal, no reemplazarlo. Los asesores humanos intervienen cuando los sistemas alcanzan límites, asegurando atención empática y decisiones complejas. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/9.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Capacitación constante 
              p.mb-4.mb-lg-0 El personal debe formarse en el manejo de herramientas de IA, interpretación de datos y protocolos de escalamiento. Esto asegura que la tecnología se use de manera eficiente y segura. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/10.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Monitoreo de indicadores 
              p.mb-4.mb-lg-0 Es fundamental medir la eficiencia de los sistemas, tiempos de respuesta, satisfacción del cliente y resolución de casos. Esto permite identificar áreas de mejora y ajustar la estrategia en tiempo real. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/19.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Ajustes iterativos 
              p.mb-4.mb-lg-0 Los algoritmos y sistemas de IA deben optimizarse constantemente según resultados, retroalimentación de clientes y desempeño de los asesores. Esto garantiza que la tecnología evolucione con las necesidades del negocio y los clientes. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/11.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Personalización progresiva 
              p.mb-4.mb-lg-0 Analizar datos de clientes para ofrecer experiencias adaptadas, como recomendaciones de productos o mensajes personalizados, sin perder el contacto humano. Esto mejora la fidelización y la percepción positiva de la marca. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema3/12.png", alt="")

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
                  h4.mb-1 Las 4 tendencias en inteligencia artificial capaces de aumentar la productividad de los equipos de #[em marketing]
                  p.mb-0 Se recomienda consultar la siguiente lectura que presenta tendencias y aplicaciones de la IA para optimizar procesos y fortalecer la productividad en el sector comercial. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.ituser.es/inteligencia-artificial/2024/12/las-4-tendencias-en-inteligencia-artificial-capaces-de-aumentar-la-productividad-de-los-equipos-de-marketing" target="_blank")
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
                texto="<em>Chatbots</em>: tecnología al servicio del asesor humano"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
