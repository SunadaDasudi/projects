import './App.css'
import Header from './components/header/Header'
import HeaderSecondary from './components/HeaderSecondary'
import Home from './components/Home'
import About from './components/About'
// import Skills from './components/Skills'
// import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <div className="app__content">
          <Home />
        </div>

        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App
