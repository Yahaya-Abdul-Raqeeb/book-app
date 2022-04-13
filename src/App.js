import React from 'react'
import Navbar from './components/NavBar'
import Bookform from './components/BookForm'
import Footer from './components/Footer'
function App() {
  return (
    <div className='app'>
    
    <Navbar/>
    <main>
    <div className='container'>
    <Bookform/>
    
    </div>
    </main>

    <Footer/>
    </div>
  )
}

export default App