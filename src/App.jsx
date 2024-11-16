import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Equipment from './components/Equipment/Equipment'
import About from './components/About/About'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
     <div className="overflow-x-hidden">
<div className='bg-gradient-to-t from-[#fff0d4] to-[#fbe0e0e5] w-full h-auto'>
      <Navbar/>
      <Hero/>

</div>
<Equipment/>
<About/>
<Footer/>
     </div>
    </>
  )
}

export default App
