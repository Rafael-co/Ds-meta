
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/header"
import SalesCard from "./componentes/salescard"
function App() {
  return (
    <>
    <ToastContainer />
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
