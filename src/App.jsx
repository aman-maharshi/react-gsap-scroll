import React from "react"
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Product from "./components/Product"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import Features from "./components/Featuers"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Product />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App
