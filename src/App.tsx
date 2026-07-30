import Nav from './components/Nav'
import Hero from './components/Hero'
import Books from './components/Books'
import About from './components/About'
import Appearances from './components/Appearances'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Books />
        <About />
        <Appearances />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
