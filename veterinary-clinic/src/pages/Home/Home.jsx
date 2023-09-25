import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components//Navbar/Navbar'
import Services from '../../components/Services/Services'
import Information from '../../components/Information/Information'
import Comments from '../../components/Comments/Comments'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import ButtonWs from '../../components/ButtonWs/ButtonWs'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Services />
        <Information />
        <Comments />
        <Blog />
        <Footer />
        <ButtonWs/>
    </div>
  )
}

export default Home
