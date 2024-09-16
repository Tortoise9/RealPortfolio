import React from 'react'
import Layout from './components/Layout'
import ContentPage from './ContentPage'
import About from './About'
import Projects from './Projects'
import ContactPage from './ContactPage'

const Home = () => {
  // we can also do by gsap 

  return (
    <Layout>
      <ContentPage/>
      <About/>
      <Projects/>
      <ContactPage/>
    </Layout>
  )
}

export default Home
