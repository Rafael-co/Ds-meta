
import Header from "./componentes/header"
import SalesCard from "./componentes/salescard"
function App() {
  return (
    <>
      <h1><Header /></h1>
      <main>
        <section id="sales">

          <div className="Dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
