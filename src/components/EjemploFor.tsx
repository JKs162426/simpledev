import { useState } from 'react'
import { ejecutarFor, resumenVueltas } from '../logica/ejecutarFor.ts'

const LIMITE_INICIAL = 3
const LIMITE_MIN = 0
const LIMITE_MAX = 10

export default function EjemploFor() {
  const [limite, setLimite] = useState(LIMITE_INICIAL)
  // false = todavía no se ha ejecutado el bucle.
  const [ejecutado, setEjecutado] = useState(false)

  // La salida se calcula a partir del límite actual, así siempre coincide
  // con el código que se ve en pantalla.
  const salida = ejecutado ? ejecutarFor(limite) : null

  function cambiarLimite(nuevo: number) {
    setLimite(nuevo)
    setEjecutado(true)
  }

  return (
    <section className="seccion">
      <h2>Pruébalo</h2>
      <p>
        Presiona <strong>Ejecutar</strong> o cambia el límite con los botones −
        y +. La consola se actualiza al instante. ¿Qué crees que muestra si
        cambias el 3 por un 5?
      </p>

      <pre className="codigo">
        <code>
          {'for (let i = 0; i < '}
          <span className="codigo-limite">{limite}</span>
          {'; i++) {\n  console.log(i)\n}'}
        </code>
      </pre>

      <div className="controles">
        <div className="limite" role="group" aria-label="Límite del bucle">
          <button
            type="button"
            className="boton-paso"
            aria-label="Restar 1 al límite"
            disabled={limite <= LIMITE_MIN}
            onClick={() => cambiarLimite(limite - 1)}
          >
            −
          </button>
          <span className="limite-valor">Límite: {limite}</span>
          <button
            type="button"
            className="boton-paso"
            aria-label="Sumar 1 al límite"
            disabled={limite >= LIMITE_MAX}
            onClick={() => cambiarLimite(limite + 1)}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="boton"
          onClick={() => setEjecutado(true)}
        >
          ▶ Ejecutar
        </button>
      </div>

      <div aria-live="polite">
        <div className="consola">
          <span className="consola-titulo">Consola</span>
          {salida === null ? (
            <span className="consola-vacia">Aquí aparecerá el resultado.</span>
          ) : salida.length === 0 ? (
            <span className="consola-vacia">(no se mostró nada)</span>
          ) : (
            salida.map((valor) => <div key={valor}>{valor}</div>)
          )}
        </div>
        {salida !== null && <p className="resumen">{resumenVueltas(limite)}</p>}
      </div>
    </section>
  )
}
