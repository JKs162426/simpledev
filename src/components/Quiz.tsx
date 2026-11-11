import { useRef, useState } from 'react'
import PreguntaQuiz from './PreguntaQuiz.tsx'
import { PREGUNTAS } from '../datos/preguntasQuiz.ts'

// null = esa pregunta todavía no se responde; true o false = si acertó.
type Respuestas = (boolean | null)[]

const SIN_RESPONDER: Respuestas = PREGUNTAS.map(() => null)

function mensajeResultado(correctas: number, total: number): string {
  if (correctas === total) return '¡Perfecto! Ya dominas la idea del bucle for.'
  if (correctas === total - 1) {
    return 'Muy bien, repasa la pregunta que falló y vuelve a intentarlo.'
  }
  return 'No pasa nada, vuelve a leer la explicación y prueba el ejemplo otra vez.'
}

export default function Quiz() {
  const [respuestas, setRespuestas] = useState<Respuestas>(SIN_RESPONDER)
  // Cambia en cada intento: las preguntas se vuelven a montar desde cero.
  const [intento, setIntento] = useState(0)
  const titulo = useRef<HTMLHeadingElement>(null)

  const terminado = respuestas.every((r) => r !== null)
  const correctas = respuestas.filter((r) => r === true).length

  function responder(indice: number, acerto: boolean) {
    setRespuestas((actuales) =>
      actuales.map((r, i) => (i === indice ? acerto : r)),
    )
  }

  function reiniciar() {
    setRespuestas(SIN_RESPONDER)
    setIntento((n) => n + 1)
    // El botón desaparece al reiniciar: el foco vuelve al título del quiz.
    titulo.current?.focus()
  }

  return (
    <section className="seccion">
      <p className="etiqueta-paso">Paso 3 · Comprueba</p>
      <h2 ref={titulo} tabIndex={-1}>
        Mini quiz
      </h2>
      <p>
        Tres preguntas rápidas. Elige una respuesta y verás al momento si
        acertaste y por qué. Al final verás tu resultado.
      </p>

      {PREGUNTAS.map((pregunta, indice) => (
        <PreguntaQuiz
          key={`${intento}-${pregunta.enunciado}`}
          numero={indice + 1}
          pregunta={pregunta}
          onResponder={(acerto) => responder(indice, acerto)}
        />
      ))}

      <div aria-live="polite">
        {terminado && (
          <div className="resultado-quiz">
            <p className="resultado-titulo">
              Resultado: {correctas} de {PREGUNTAS.length} correctas
            </p>
            <p>{mensajeResultado(correctas, PREGUNTAS.length)}</p>
            <button type="button" className="boton" onClick={reiniciar}>
              Volver a intentar
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
