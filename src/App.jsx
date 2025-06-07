import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Solucao from './routes/Solucao'
import Sobre from './routes/Sobre'

function App() {

  return (
    <>
      <Nav></Nav>
      <main className="p-6 max-w-5xl mx-auto space-y-12">
          <Home></Home>
          <Sobre></Sobre>
          <Solucao></Solucao>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
