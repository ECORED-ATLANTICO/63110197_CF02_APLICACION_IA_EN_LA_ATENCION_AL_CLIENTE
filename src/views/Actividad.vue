<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Estrategias de atención al cliente con IA',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre el uso, alcances y principios de la IA en la atención al cliente.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito de implementar inteligencia artificial en los procesos de atención al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar completamente al personal de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la eficiencia, la experiencia y los tiempos de respuesta al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el número de oficinas de servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los canales digitales de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La inteligencia artificial optimiza la atención al cliente mediante procesos más ágiles, personalizados y eficientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué herramienta basada en inteligencia artificial permite responder consultas frecuentes de manera automática?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CRM.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ERP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Chatbot.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Hoja de cálculo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los chatbots permiten automatizar la atención de consultas frecuentes durante las 24 horas del día.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los principales beneficios de personalizar la atención mediante inteligencia artificial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la satisfacción y fidelización del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar las bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todas las estrategias comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La personalización permite ofrecer experiencias acordes con las necesidades y preferencias del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué tecnología permite identificar emociones a partir del lenguaje utilizado por el cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de sentimientos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Marketing tradicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario ABC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Benchmarking.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis de sentimientos permite interpretar emociones presentes en mensajes escritos o conversaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿En qué situación es recomendable escalar un caso a un asesor humano?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando el cliente realiza una consulta sencilla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando el chatbot responde correctamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando la solicitud requiere análisis, negociación o manejo especializado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuando el cliente consulta el horario de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los casos complejos deben ser atendidos por personal capacitado para garantizar una solución adecuada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál principio ético debe garantizarse al utilizar inteligencia artificial en la atención al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Confidencialidad de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de los registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicación de datos personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restricción del acceso al servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La protección y confidencialidad de los datos personales son principios fundamentales en el uso de la IA.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué riesgo puede presentarse cuando un sistema de inteligencia artificial utiliza información sesgada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor precisión en todas las respuestas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decisiones injustas o discriminatorias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incremento automático de las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducción de la satisfacción del cliente únicamente por el tiempo de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los sesgos en los datos pueden generar decisiones incorrectas o discriminatorias durante la atención al cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál tendencia tecnológica permite anticipar las necesidades del cliente mediante el análisis de datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analítica predictiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Archivo físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contabilidad financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario periódico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La analítica predictiva utiliza datos históricos para anticipar comportamientos y necesidades del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué estrategia facilita la integración de la inteligencia artificial con el talento humano?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la capacitación del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Capacitar continuamente a los colaboradores en el uso de herramientas digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir todos los procesos manuales inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir el acceso a la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La capacitación facilita la adopción de nuevas tecnologías y fortalece el trabajo colaborativo entre personas e inteligencia artificial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál indicador permite conocer el nivel de satisfacción de los clientes después de recibir atención?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Índice de satisfacción del cliente (CSAT).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rotación de cartera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El CSAT es un indicador utilizado para medir la satisfacción del cliente respecto al servicio recibido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la principal ventaja de utilizar asistentes virtuales con inteligencia artificial en la atención al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la disponibilidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Brindar atención inmediata y continua a los clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la comunicación con el usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todos los canales de atención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los asistentes virtuales ofrecen respuestas rápidas y atención permanente, mejorando la experiencia del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de información utiliza la inteligencia artificial para personalizar la atención al cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Historial de interacción y preferencias del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Información de empresas competidoras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Datos climáticos de la región.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicidad impresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La IA analiza datos históricos y preferencias para ofrecer una atención personalizada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es uno de los beneficios del análisis de datos en la atención al cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el tiempo de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Anticipar necesidades y mejorar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la comunicación con los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los canales digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis de datos permite comprender el comportamiento del cliente y mejorar el servicio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe hacer una organización cuando un sistema de IA no logra resolver una solicitud del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar automáticamente la conversación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escalar el caso a un asesor humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar la solicitud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solicitar un nuevo registro del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los casos complejos deben ser atendidos por un asesor humano para garantizar una solución adecuada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es un principio fundamental para el uso responsable de la inteligencia artificial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transparencia en el tratamiento de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Compartir datos personales sin autorización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los registros de atención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso a la información del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La transparencia fortalece la confianza y promueve el uso ético de la inteligencia artificial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué aspecto debe supervisarse continuamente para evitar decisiones inadecuadas de un sistema de IA?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los sesgos en los datos utilizados para el entrenamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color de la interfaz del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación de las oficinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificar y corregir sesgos permite obtener respuestas más justas y confiables.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué tecnología permite automatizar recomendaciones de productos según el comportamiento del cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inteligencia artificial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Procesador de texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hoja de cálculo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La inteligencia artificial analiza patrones de comportamiento para ofrecer recomendaciones personalizadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es un beneficio de integrar la inteligencia artificial con el talento humano?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar completamente la intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinar la automatización con el criterio y la empatía de las personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la calidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la comunicación con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La IA complementa el trabajo humano, permitiendo una atención más eficiente y personalizada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué acción favorece una implementación exitosa de la inteligencia artificial en la atención al cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Capacitar al personal en el uso de nuevas herramientas tecnológicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los procesos de mejora continua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restringir el acceso a la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todos los procedimientos establecidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La capacitación facilita la adopción de tecnologías y mejora el desempeño del equipo de trabajo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de medir indicadores en los procesos de atención al cliente apoyados con IA?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de reclamaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar el desempeño e identificar oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de herramientas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la retroalimentación de los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los indicadores permiten evaluar la efectividad de la atención y apoyar la mejora continua de los procesos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
