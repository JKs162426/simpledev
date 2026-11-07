import ExplicacionFor from './components/ExplicacionFor.tsx'
import EjemploFor from './components/EjemploFor.tsx'
import './App.css'

function App() {
  return (
    <main className="pagina">
      <header>
        <h1>SimpleDev</h1>
        <p>
          Aprende el bucle <code>for</code> de TypeScript, en español y paso a
          paso.
        </p>
      </header>

      <ExplicacionFor />
      <EjemploFor />
    </main>
  )
}

export default App
