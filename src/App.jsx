import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


export const App = () => {
  return (
    <>
        <Header></Header>
        <Nav></Nav>
        <About></About>
        <Experience></Experience>
        <Services></Services>
        <Portifolio></Portifolio>
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default App