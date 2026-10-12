<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Estrategias de atención al cliente con IA presenta los conceptos básicos, herramientas y estrategias necesarias para integrar la IA en los procesos de servicio de las organizaciones.  
    p.mb-5 Aborda la satisfacción y la fidelización del cliente, asimismo, contempla la gestión de quejas, la personalización de la atención, el análisis de emociones y la toma de decisiones, considerando principios éticos, la protección de la privacidad, la identificación de sesgos, la gestión del cambio organizacional y la optimización continua de los procesos de atención al cliente apoyados en inteligencia artificial. 
    

    .row.justify-content-center
      .col-xl-11.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura presenta la estructura temática del componente formativo Estrategias de atención al cliente con IA, organizada en áreas que integran la experiencia del cliente, la gestión de situaciones complejas, el uso ético de la información, las tendencias tecnológicas y la implementación de inteligencia artificial. En conjunto, muestra cómo estos elementos se articulan para personalizar la atención, fortalecer la satisfacción, apoyar la resolución de problemas y promover la mejora continua de los procesos de servicio.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
