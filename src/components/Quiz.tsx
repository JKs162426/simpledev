import PreguntaQuiz from './PreguntaQuiz.tsx'
import { PREGUNTAS } from '../datos/preguntasQuiz.ts'

export default function Quiz() {
  return (
    <section className="seccion">
      <p className="etiqueta-paso">Paso 3 · Comprueba</p>
      <h2>Mini quiz</h2>
      <p>
        Tres preguntas rápidas. Elige una respuesta y verás al momento si
        acertaste y por qué. No hay puntos: es solo para practicar.
      </p>

      {PREGUNTAS.map((pregunta, indice) => (
        <PreguntaQuiz
          key={pregunta.enunciado}
          numero={indice + 1}
          pregunta={pregunta}
        />
      ))}
    </section>
  )
}
