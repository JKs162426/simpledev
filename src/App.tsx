import ExplicacionFor from './components/ExplicacionFor.tsx'
import EjemploFor from './components/EjemploFor.tsx'
import Quiz from './components/Quiz.tsx'
import './App.css'

function App() {
  return (
    <main className="pagina">
      <header className="cabecera">
        <h1>
          {/* Las mismas llaves { } del favicon: el bloque que el for repite. */}
          <span className="logo" aria-hidden="true">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.5 7.5c-2.2 0-3.2 1-3.2 3.2v2.4c0 1.8-1 2.9-2.8 2.9 1.8 0 2.8 1.1 2.8 2.9v2.4c0 2.2 1 3.2 3.2 3.2" />
              <path d="M19.5 7.5c2.2 0 3.2 1 3.2 3.2v2.4c0 1.8 1 2.9 2.8 2.9-1.8 0-2.8 1.1-2.8 2.9v2.4c0 2.2-1 3.2-3.2 3.2" />
            </svg>
          </span>
          SimpleDev
        </h1>
        <p className="entradilla">
          Aprende el bucle <code>for</code> en español, en tres pasos: entiende
          cómo funciona, pruébalo y comprueba lo que aprendiste.
        </p>
        <p className="nota">
          Los ejemplos están en TypeScript, pero la idea es la misma en casi
          cualquier lenguaje de programación.
        </p>
      </header>

      <ExplicacionFor />
      <EjemploFor />
      <Quiz />
    </main>
  )
}

export default App
