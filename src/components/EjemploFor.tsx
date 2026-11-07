import { useState } from 'react'
import { ejecutarFor } from '../logica/ejecutarFor.ts'

const LIMITE = 3

export default function EjemploFor() {
  // null = todavía no se ha ejecutado el bucle.
  const [salida, setSalida] = useState<number[] | null>(null)

  return (
    <section className="seccion">
      <h2>Pruébalo</h2>
      <p>Presiona el botón para correr el bucle y ver lo que muestra.</p>

      <pre className="codigo">
        <code>{`for (let i = 0; i < ${LIMITE}; i++) {
  console.log(i)
}`}</code>
      </pre>

      <button
        type="button"
        className="boton"
        onClick={() => setSalida(ejecutarFor(LIMITE))}
      >
        ▶ Ejecutar
      </button>

      <div className="consola" aria-live="polite">
        <span className="consola-titulo">Consola</span>
        {salida === null ? (
          <span className="consola-vacia">Aquí aparecerá el resultado.</span>
        ) : (
          salida.map((valor) => <div key={valor}>{valor}</div>)
        )}
      </div>
    </section>
  )
}
