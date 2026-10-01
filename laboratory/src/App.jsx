import { useState } from 'react'
import {Hero} from "./components/Hero"
import {Footer} from "./components/Footer"
import {Testimonials} from "./components/Testimonials"
import {Header} from "./components/Header"
import {Courses} from "./components/Courses"
import './App.css'
import './components/style.css'

function App() {
  return (
  <>
  <Header/>
  <Hero/>
  <Courses/>
  <Testimonials/>
  <Footer/>
</>
  )
}

export default App
