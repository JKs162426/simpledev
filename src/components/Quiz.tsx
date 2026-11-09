import PreguntaQuiz from './PreguntaQuiz.tsx'
import { PREGUNTAS } from '../datos/preguntasQuiz.ts'

export default function Quiz() {
  return (
    <section className="seccion">
      <h2>Mini quiz</h2>
      <p>
        Tres preguntas rápidas. Elige una respuesta y verás al momento si
        acertaste y por qué.
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
