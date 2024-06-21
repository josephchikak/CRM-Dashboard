import React from 'react'
import {  delay, easeInOut, motion } from "framer-motion"

const Nav = () => {

    const container = {
        hidden: { height: "0vh",},
        show: {
          height: "30vh",
          transition: {
            // staggerChildren: 1,
            ease: "easeInOut",
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        transition:{
            ease:'easeInOut',
            delay:'0.5s'
        }
    }

    const variants = {
        open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
      };

      const variants2 = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
      };

   
      

  return (
    <motion.nav
        variants={item}
        initial="hidden"
        animate="show"
        exit='hidden'
        className='pt-20 text-[#9197B3] pb-10 '>
    <motion.ul
            variants={variants}
         className='flex flex-col justify-between h-[30vh]'>
      <motion.li
               variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      > 
          <a href="#" className='flex  items-center p-3 rounded-[8px]  focus:bg-primary  focus:text-[white]'> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              Dashboard
                
          </a>
      </motion.li>
      <motion.li
                variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      >
          <a href="#" className='flex justify-between items-center p-3 rounded-[8px]  focus:bg-primary focus:text-[white]'>
              
              <div className='flex'>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                Product

              </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
            </a>  
      </motion.li>

      <motion.li
                variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      >
         <a href="#"  className='flex justify-between items-center  focus:bg-primary  focus:text-[white] focus:font-white p-3 focus:fill-white rounded-[8px]'>
          
             <div className='flex'>

                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

                Customers

            </div>
             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                 <path d="M6 12L10 8L6 4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg> 
         </a>
      </motion.li>

      <motion.li
                variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      >
         <a href="#" className='flex justify-between items-center p-3 rounded-[8px]  focus:bg-primary  focus:text-[white]'>
         
           <div className='flex'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              Income

          </div>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                 <path d="M6 12L10 8L6 4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg> 
         </a>
      </motion.li>

      <motion.li
                variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      >
         <a href="#" className='flex justify-between items-center p-3 rounded-[8px]  focus:bg-primary  focus:text-[white]'>
         
            <div className='flex'>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

                Promote

            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                 <path d="M6 12L10 8L6 4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> 
         </a>  
      </motion.li>

      <motion.li
                variants={variants2}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.95 }}
      >
         <a href="#" className='flex justify-between items-center p-3 rounded-[8px] focus:bg-primary focus:text-[white]'>    
            <div className='flex'>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-5'>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3945 10.7H13.4035" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

                Help

            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='justify-self-end'>
                 <path d="M6 12L10 8L6 4" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> 
         </a> 
      </motion.li>

    </motion.ul>

  </motion.nav>
  )
}

export default Nav