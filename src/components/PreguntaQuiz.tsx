import { useId, useState } from 'react'
import type { Pregunta } from '../datos/preguntasQuiz.ts'

type Props = {
  numero: number
  pregunta: Pregunta
}

export default function PreguntaQuiz({ numero, pregunta }: Props) {
  // null = todavía no responde. Si no, guarda la posición de la opción elegida.
  const [elegida, setElegida] = useState<number | null>(null)
  const idTitulo = useId()

  const respondida = elegida !== null
  const acerto = elegida === pregunta.correcta
  const textoCorrecto = pregunta.opciones[pregunta.correcta]

  function elegir(indice: number) {
    // Solo cuenta la primera respuesta.
    if (respondida) return
    setElegida(indice)
  }

  // Después de responder: la correcta se marca en verde y la elegida
  // (si estaba mal) en rojo.
  function estadoOpcion(indice: number): string {
    if (!respondida) return ''
    if (indice === pregunta.correcta) return 'correcta'
    if (indice === elegida) return 'incorrecta'
    return ''
  }

  return (
    <div className="pregunta">
      <h3 id={idTitulo}>
        {numero}. {pregunta.enunciado}
      </h3>

      <pre className="codigo">
        <code>{pregunta.codigo}</code>
      </pre>

      <div className="opciones" role="group" aria-labelledby={idTitulo}>
        {pregunta.opciones.map((opcion, indice) => {
          const estado = estadoOpcion(indice)
          return (
            <button
              key={opcion}
              type="button"
              className={`opcion ${estado}`}
              aria-disabled={respondida}
              onClick={() => elegir(indice)}
            >
              {opcion}
              {estado === 'correcta' && (
                <span className="opcion-marca" aria-hidden="true">
                  ✓
                </span>
              )}
              {estado === 'incorrecta' && (
                <span className="opcion-marca" aria-hidden="true">
                  ✗
                </span>
              )}
            </button>
          )
        })}
      </div>

      <div aria-live="polite">
        {respondida && (
          <p className={`feedback ${acerto ? 'correcta' : 'incorrecta'}`}>
            <strong>
              {acerto
                ? '¡Correcto!'
                : `No es esa. La respuesta es «${textoCorrecto}».`}
            </strong>{' '}
            {pregunta.explicacion}
          </p>
        )}
      </div>
    </div>
  )
}
