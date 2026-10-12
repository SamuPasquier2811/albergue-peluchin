import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cinta from './components/Cinta'
import Hacemos from './components/Hacemos'
import Cifras from './components/Cifras'
import Galeria from './components/Galeria'
import Adopta from './components/Adopta'
import Ayuda from './components/Ayuda'
import Camino from './components/Camino'
import Visitanos from './components/Visitanos'
import Footer from './components/Footer'
import useRevealAll from './hooks/useReveal'

export default function App() {
  useRevealAll()
  return (
    <>
      <div className="progreso" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Cinta />
        <Hacemos />
        <Cifras />
        <Galeria />
        <Adopta />
        <Ayuda />
        <Camino />
        <Visitanos />
      </main>
      <Footer />
    </>
  )
}