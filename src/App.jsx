import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import { AboutMe } from './Components/AboutMe'
import { Skills } from './Components/Skills'
import { Footer } from './Components/Footer'
import { Contact } from './Components/Contact'
import { ScoialLinks } from './Components/SocialLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ScoialLinks/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
