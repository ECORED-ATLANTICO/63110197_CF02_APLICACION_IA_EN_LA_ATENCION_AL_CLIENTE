<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Experiencia con IA

    img(src="@/assets/curso/tema1/1.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-terciario-t10
          p.mb-0 La satisfacción y fidelización del cliente en entornos digitales dependen cada vez más de la integración estratégica de la inteligencia artificial en los procesos de atención. La capacidad de responder con rapidez, personalizar interacciones y analizar emociones permite a las organizaciones fortalecer la experiencia del usuario, generar confianza y construir relaciones sostenibles basadas en datos, eficiencia y empatía. 

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Satisfacción y fidelización 

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-lg-8
        p La satisfacción del cliente constituye un indicador estratégico que mide el grado en que la experiencia recibida cumple o supera las expectativas previas. En entornos apoyados por inteligencia artificial, esta experiencia está mediada por sistemas automatizados como #[em chatbots], asistentes virtuales y motores de análisis predictivo. 
        .bg-primario-p5.rounded-4.p-4.py-3.mb-3
          p.mb-0 La fidelización, en contraste, representa una fase superior del vínculo comercial. No solo implica recompra, sino lealtad sostenida, recomendación activa y reducción de sensibilidad al precio. Según Philip Kotler, la lealtad del cliente es consecuencia directa de la generación continua de valor y de relaciones consistentes en el tiempo. 
        p.mb-4.mb-lg-0 En contextos digitales, la IA impacta la satisfacción a través de tres dimensiones fundamentales:
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
    
    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-6.col-xl-4.mb-3.mb-xl-0
        .bg-primario-p5.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3.col-lg-3
              figure
                img.imgw-60(src="@/assets/curso/tema1/3.svg", alt="" data-aos="zoom-in-down")
            .col-9.col-lg-9
              p.mb-0 Eficiencia operativa. 
      .col-sm-6.col-xl-4.mb-3.mb-xl-0
        .bg-primario-p5.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3.col-lg-3
              figure
                img.imgw-60(src="@/assets/curso/tema1/4.svg", alt="" data-aos="zoom-in-down")
            .col-9.col-lg-9
              p.mb-0 Personalización inteligente. 
      .col-sm-6.col-xl-4.mb-3.mb-xl-0
        .bg-primario-p5.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-3.col-lg-3
              figure
                img.imgw-60(src="@/assets/curso/tema1/5.svg", alt="" data-aos="zoom-in-down")
            .col-9.col-lg-9
              p.mb-0 Experiencia emocional positiva. 

    .bg-contenido-a10.rounded-4.p-4.py-3.mb-5
      p.mb-0.text-center Cuando estas dimensiones se articulan estratégicamente, se fortalece la retención y se incrementa el valor del ciclo de vida del cliente. 

    .fullwidth-bg.fullwidth-bg--2
    .titulo-sexto.color-acento-contenido.z-2
      h5 Figura 1.
      span Dimensiones de la IA
    img.mb-5.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema1/6-mob.png", alt="La figura presenta las principales dimensiones en las que la inteligencia artificial puede generar impacto en la atención al cliente. Muestra cómo su aplicación contribuye a optimizar procesos y recursos, adaptar respuestas y soluciones a las necesidades de cada usuario y fortalecer la calidad de las interacciones. En conjunto, evidencia el aporte de la IA para mejorar la eficiencia del servicio, ofrecer experiencias más personalizadas y favorecer la satisfacción y fidelización del cliente. ")
    img.mb-5.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema1/6.png", alt="La figura presenta las principales dimensiones en las que la inteligencia artificial puede generar impacto en la atención al cliente. Muestra cómo su aplicación contribuye a optimizar procesos y recursos, adaptar respuestas y soluciones a las necesidades de cada usuario y fortalecer la calidad de las interacciones. En conjunto, evidencia el aporte de la IA para mejorar la eficiencia del servicio, ofrecer experiencias más personalizadas y favorecer la satisfacción y fidelización del cliente. ")

    .fullwidth-bg.fullwidth-bg--1
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Factores que inciden directamente en la percepción de valor 

    p.mb-4.mb-lg-5.z-2 La satisfacción y fidelización del cliente en entornos apoyados por inteligencia artificial no dependen únicamente de la tecnología, sino de factores estratégicos que influyen en la calidad del servicio, la confianza del usuario y la continuidad de la relación comercial. Entre los principales se encuentran: 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/7.svg' alt='')
            h5.mb-4.text-center Tiempo de respuesta 
            p.mb-0 Tiempo transcurrido entre la solicitud del cliente y la respuesta o solución recibida. Una atención oportuna mejora la percepción de eficiencia. 
            p.mb-0 #[strong Ejemplo]: un cliente consulta su pedido por chat y recibe información actualizada en menos de dos minutos. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/8.svg' alt='')
            h5.mb-4.text-center Precisión de la información 
            p.mb-0 Entrega información correcta, clara, actualizada y confiable, reduciendo errores, confusiones y reprocesos durante la atención. 
            p.mb-0 #[strong Ejemplo]: la IA consulta la política vigente y responde correctamente sobre las condiciones de garantía de un producto. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/9.svg' alt='')
            h5.mb-4.text-center Personalización 
            p.mb-0 Adapta la atención y las soluciones según las necesidades, preferencias, características e historial de cada cliente. 
            p.mb-0 #[strong Ejemplo]: un cliente recibe recomendaciones de productos basadas en sus compras anteriores y preferencias. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/10.svg' alt='')
            h5.mb-4.text-center Escalamiento adecuado 
            p.mb-0 Transfiere oportunamente los casos que requieren mayor conocimiento, autorización o intervención hacia el área o asesor correspondiente. 
            p.mb-0 #[strong Ejemplo]: un asistente virtual identifica un reclamo complejo y lo dirige a un asesor especializado para su solución. 
          .tarjeta.tarjeta--blanca.p-4.pt-5.bg-sistema-h.shadow-sm
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema1/11.svg' alt='')
            h5.mb-4.text-center Continuidad multicanal 
            p.mb-0 Mantiene la información y el contexto del cliente cuando cambia de canal, evitando repeticiones y facilitando una atención continua. 
            p.mb-0 #[strong Ejemplo]: el cliente inicia por chat y continúa por teléfono sin repetir los datos ni explicar nuevamente su solicitud. 
      .col-lg-4.d-none.d-lg-block
        figure
          img.imgw-324(src='@/assets/curso/tema1/12.png', alt='')

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Impacto sectorial

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La inteligencia artificial genera impactos diferenciados y estratégicos en diversos sectores económicos mediante la optimización de procesos, personalización del servicio y fortalecimiento de la relación con el cliente. 
        .bg-terciario-t10.p-4.rounded-4.py-3
          p.mb-0 En el sector #[em retail], empresas como Amazon han demostrado que la recomendación automatizada incrementa la tasa de recompra y el #[em ticket] promedio mediante algoritmos predictivos. 

    .row.justify-content-center.align-items-center.z-2
      .col-lg-7
        p En el sector financiero, organizaciones como BBVA utilizan asistentes virtuales que analizan patrones de consumo y ofrecen soluciones personalizadas, mejorando la percepción de acompañamiento. 
        .bg-secundario-s5.p-4.rounded-4.py-3
          p.mb-0 En servicios de salud digital, la IA permite recordatorios automatizados, seguimiento de tratamientos y comunicación preventiva, fortaleciendo la confianza institucional. Salud Total EPS por ejemplo, utiliza sistemas digitales para la gestión de trámites, directorio médico y citas a través de su #[em app], mejorando procesos administrativos con tecnología digital (incluyendo automatización y canales virtuales). 
      .col-sm-8.col-lg-5.d-none.d-lg-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/14.png", alt="")

    .fullwidth-bg.fullwidth-bg--1
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Personalización y análisis de emociones


    img(src="@/assets/curso/tema1/15.png", alt="", data-aos="zoom-in-down")  
    .row.justify-content-center.z-2
      .col-lg-10.p-4
        div.banner-text.shadow.bg-contenido-a10.mb-3
          p.mb-0 La personalización basada en IA consiste en adaptar contenidos, ofertas y mensajes según variables conductuales, demográficas y transaccionales del cliente. Esta capacidad transforma la atención masiva en experiencias individualizadas, incrementando la relevancia percibida. 
          
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p El análisis de emociones, también conocido como análisis de sentimiento, permite identificar estados emocionales a partir de texto, voz o patrones de interacción digital. Su propósito estratégico es ajustar la respuesta organizacional de manera empática y oportuna. 
        .bg-primario-p5.rounded-4.p-4.py-3.mb-4.mb-lg-0
          p.mb-0 Esta integración fortalece la dimensión relacional del mercadeo, pues no solo se responde a una necesidad funcional, sino también a un estado emocional. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/16.png", alt="")
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Técnicas de personalización con IA 

    p La personalización con inteligencia artificial permite adaptar productos, mensajes y experiencias según el perfil y comportamiento del cliente. Para ello, utiliza datos, analítica avanzada y aprendizaje automático, facilitando la anticipación de necesidades, la mejora de la comunicación y el fortalecimiento de la relación con el consumidor. 
    p.mb-4.mb-lg-5 Entre las principales técnicas de personalización se encuentran: 

    .bg-slider.bg-slider--xl.p-4.z-2.rounded-1.mb-4.mb-lg-5
      SlyderA(tipo="b")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Segmentación avanzada 
              p Agrupa clientes mediante datos demográficos, comportamientos, preferencias e historial para ofrecer atención diferenciada.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa identifica clientes frecuentes y les ofrece beneficios acordes con sus hábitos de compra. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/17.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Recomendaciones predictivas 
              p Utiliza datos históricos e IA para anticipar necesidades y sugerir productos, servicios o soluciones pertinentes.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una plataforma recomienda un producto complementario según las compras y búsquedas anteriores del cliente. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/18.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Ajuste de la comunicación 
              p Adapta el lenguaje, contenido, momento y canal del mensaje según las características y preferencias del cliente.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una empresa envía notificaciones breves por WhatsApp a quienes prefieren este canal. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/19.png", alt="")
        .tarjeta.tarjeta--blanca.p-lg-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-7
              h5.mb-4 Experiencia multicanal 
              p Personaliza y mantiene la atención del cliente al interactuar mediante diferentes canales, conservando información relevante.  
              p.mb-4.mb-lg-0 #[strong Ejemplo:] una consulta iniciada por chat continúa por teléfono sin solicitar nuevamente los datos proporcionados. 
            .col-sm-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/20.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Análisis de emociones en la experiencia del cliente 

    p.mb-4 La inteligencia artificial permite analizar emociones del cliente para mejorar la atención, priorizar casos críticos y fortalecer la experiencia de servicio. Por lo tanto:  

    ul.checklist.mb-4
      li.ps-3 La IA puede detectar indicadores lingüísticos o de voz asociados con:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        .bg-secundario-s5.rounded-4.p-4.py-3.mb-4.mb-lg-0
          p.mb-0.text-center Frustración. 
      .col-sm-6.col-lg-3
        .bg-secundario-s5.rounded-4.p-4.py-3.mb-4.mb-lg-0
          p.mb-0.text-center Satisfacción. 
      .col-sm-6.col-lg-3
        .bg-secundario-s5.rounded-4.p-4.py-3.mb-4.mb-sm-0
          p.mb-0.text-center Confusión. 
      .col-sm-6.col-lg-3
        .bg-secundario-s5.rounded-4.p-4.py-3
          p.mb-0.text-center Ansiedad. 

    p.mb-4 Empresas tecnológicas como IBM han desarrollado soluciones de análisis de sentimiento que permiten priorizar casos críticos y mejorar la empatía digital. 

    ul.checklist.mb-4
      li.ps-3 La detección emocional permite:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .bg-terciario.rounded-4.p-4.py-3.h-100
          p.mb-0.text-center Activar protocolos de intervención humana. 
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .bg-terciario.rounded-4.p-4.py-3.h-100
          p.mb-0.text-center Ajustar lenguaje y tono comunicacional. 
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .bg-terciario.rounded-4.p-4.py-3.h-100
          p.mb-0.text-center Reducir abandono de servicio. 
      .col-sm-6.col-lg-3
        .bg-terciario.rounded-4.p-4.py-3.h-100
          p.mb-0.text-center Incrementar confianza y percepción de acompañamiento. 

    .fullwidth-bg.fullwidth-bg--2
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Integración estratégica: personalización y fidelización 

    p.mb-4.z-2 La articulación entre personalización, análisis emocional y métricas de satisfacción genera un modelo de atención inteligente basado en datos. De esto hay un flujo estratégico que comprende:

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-adicional.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-sm-0(src="@/assets/curso/tema1/21.svg", alt="" data-aos="zoom-in-down")
            .col-sm-9
              p.mb-0 Captura de datos de interacción. 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-adicional.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-sm-0(src="@/assets/curso/tema1/22.svg", alt="" data-aos="zoom-in-down")
            .col-sm-9
              p.mb-0 Análisis de preferencias y emociones. 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-adicional.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-sm-0(src="@/assets/curso/tema1/23.svg", alt="" data-aos="zoom-in-down")
            .col-sm-9
              p.mb-0 Generación de respuesta personalizada. 
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-adicional.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-sm-0(src="@/assets/curso/tema1/24.svg", alt="" data-aos="zoom-in-down")
            .col-sm-9
              p.mb-0 Escalamiento con contexto completo si es necesario.    
      .col-sm-9.col-lg-6.col-xl-4.mb-3
        .bg-adicional.rounded-4.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-3
              figure
                img.imgw-60.mb-4.mb-sm-0(src="@/assets/curso/tema1/25.svg", alt="" data-aos="zoom-in-down")
            .col-sm-9
              p.mb-0 Medición mediante indicadores como NPS y tasa de retención. 

    p.mb-4.mb-lg-5.z-2 Este modelo permite pasar de una atención reactiva a una gestión predictiva del cliente, fortaleciendo relaciones de largo plazo y optimizando recursos organizacionales. 

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .tarjeta.bg-secundario-s5.p-4.py-3.mb-xl-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.position-custom(src="@/assets/curso/tema1/26.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Inteligencia artificial y experiencia de cliente
                  p.mb-0 Ir al video que muestra cómo la inteligencia artificial transforma la experiencia del cliente y la fidelización, con ejemplos claros de aplicación práctica:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RFnIPgGkkBo" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .tarjeta.bg-terciario.p-4.py-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 10 formas de aprovechar la inteligencia artificial (IA) y brindar experiencias del cliente excepcionales
                  p.mb-0 La   siguiente lectura aborda estrategias para mejorar la experiencia del cliente mediante el uso de inteligencia artificial. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://grupoinmotion.com/10-formas-de-aprovechar-la-inteligencia-artificial-ia-y-brindar-experiencias-del-cliente-excepcionales/" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
