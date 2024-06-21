import React, { useState } from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
import Product from './components/Product'

function App() {



  return (
    <>
    <div className='w-[100vw] h-[100vh] flex flex-col sm:flex-row font-poppins'>
       <SideMenu/>
  
       <Product/>
    </div>
   
    </>
  )
}

export default App
