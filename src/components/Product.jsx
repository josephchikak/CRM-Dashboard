import React from 'react'
import Customers from './Customers'

const Product = () => {
  return (
    <div  className='bg-[#F6F9FD] w-[100vw] sm:w-[80vw] h-[100vh] flex justify-center p-5  '>

        <div className='flex flex-col w-[100%] sm:w-[80%] h-[100%] sm:justify-center items-center text-text'>
             <h2 className='pb-10 sm:text-[24px] w-[100%] text-left'> Hello Evano 👋🏽,</h2>
             <Customers/>
            
        </div>


    </div>
  )
}

export default Product