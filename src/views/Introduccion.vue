<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La inteligencia artificial se ha convertido en una herramienta estratégica para las organizaciones, al permitir optimizar los procesos de atención al cliente mediante automatización, análisis de datos y tecnologías digitales, mejorando la eficiencia y la experiencia del usuario. 
        .bg-contenido-a10.rounded-4.p-4.py-3.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-10
              p.mb-0 Este componente formativo orienta al aprendiz en la aplicación de la inteligencia artificial en la atención al cliente, abordando el énfasis en la satisfacción, fidelización y personalización del servicio, bajo principios éticos y de privacidad. 
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-78(src="@/assets/curso/intro-2.png", alt="" data-aos="zoom-in-down")
        p.mb-0 Durante el desarrollo del componente, el aprendiz adquirirá criterios para integrar la inteligencia artificial en los procesos de atención al cliente, a través del análisis de tendencias, casos empresariales y estrategias de implementación, fortaleciendo la toma de decisiones y la mejora continua del servicio alineada con los objetivos organizacionales. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
