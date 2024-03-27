import React from 'react'
import { About, Footer, Hero, Navbar,Services,Work} from './components'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;