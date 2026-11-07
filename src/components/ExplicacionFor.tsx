export default function ExplicacionFor() {
  return (
    <section className="seccion">
      <h2>¿Para qué sirve un for?</h2>
      <p className="gancho">Para repetir algo sin copiar y pegar.</p>

      <pre className="codigo">
        <code>{`for (let i = 0; i < 3; i++) {
  console.log(i)
}`}</code>
      </pre>

      <p>
        <code>i</code> es un contador: guarda en qué vuelta vamos.{' '}
        <code>console.log(i)</code> muestra su valor en la consola.
      </p>

      <p>El for tiene tres partes:</p>
      <ol className="partes">
        <li>
          <code>let i = 0</code> → empieza en 0.
        </li>
        <li>
          <code>i &lt; 3</code> → repite mientras i sea menor que 3.
        </li>
        <li>
          <code>i++</code> → suma 1 en cada vuelta.
        </li>
      </ol>
    </section>
  )
}
