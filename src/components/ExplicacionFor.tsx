// Cada parte del for tiene su color de marcador. El mismo color aparece en
// el código y en la lista, para que se vea qué parte es cuál.
export default function ExplicacionFor() {
  return (
    <section className="seccion">
      <p className="etiqueta-paso">Paso 1 · Entiende</p>
      <h2>¿Para qué sirve un for?</h2>
      <p className="gancho">
        Para repetir algo varias veces sin copiar y pegar el mismo código.
      </p>

      <p>
        Un <code>for</code> es un <strong>bucle</strong>: un bloque de código
        que se repite. Este repite una línea 3 veces:
      </p>

      <pre className="codigo">
        <code>
          {'for ('}
          <span className="marca marca-inicio">{'let i = 0'}</span>
          {'; '}
          <span className="marca marca-condicion">{'i < 3'}</span>
          {'; '}
          <span className="marca marca-incremento">{'i++'}</span>
          {') {\n  console.log(i)\n}'}
        </code>
      </pre>

      <p>
        <code>i</code> es un contador: guarda en qué vuelta vamos.{' '}
        <code>console.log(i)</code> escribe el valor de <code>i</code> en la{' '}
        <strong>consola</strong>, que es donde el programa muestra sus
        resultados.
      </p>

      <p>Las tres partes del for:</p>
      <ol className="partes">
        <li>
          <code className="marca marca-inicio">let i = 0</code>{' '}
          <strong>Inicio:</strong> crea el contador <code>i</code> y lo pone en
          0.
        </li>
        <li>
          <code className="marca marca-condicion">i &lt; 3</code>{' '}
          <strong>Condición:</strong> el bucle se repite mientras{' '}
          <code>i</code> sea menor que 3.
        </li>
        <li>
          <code className="marca marca-incremento">i++</code>{' '}
          <strong>Incremento:</strong> suma 1 a <code>i</code> al final de cada
          vuelta.
        </li>
      </ol>
    </section>
  )
}
