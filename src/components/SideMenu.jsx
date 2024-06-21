import React, {useState} from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion'
import '../App.css'


const SideMenu = () => {

  const [open, setOpen ] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

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



  return (
    <div className='sm:w-[20vw] sm:h-[100vh] bg-background text-text p-5 flex justify-center'  >
        <div className='flex flex-col w-[90%] justify-between pt-5'>
      
                  <div className=' absolute top-9 right-2 p-3 cursor-pointer sm:hidden' onClick={handleClick}>
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 cursor-pointer h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                      </svg>
                    </div>
                    
          <div className='flex flex-col'>
               <div className='flex '>

                      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                      <path d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z" fill="black"/>
                      <path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black"/>
                      </svg>

                      <h1 after='v.01' className='font-bold text-[26px]  after:content-[attr(after)] after:font-light after:text-sm  '>
                            Dashboard
                      </h1>
             
                 
            </div>
            <nav
                  className='pt-20 text-[#9197B3] pb-10 hidden md:flex'>
              <ul
                  className='flex flex-col justify-between h-[30vh]'>
                <motion.li
                        
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

              </ul>

            </nav>
           {open ? 
               <Nav/>
            :
            <></>
            }
          </div>
            <div>

                <div className='lg:block hidden h-0 md:h-full '>
                      <div className='w-[100%] h-[18vh] bg-gradient-to-r to-primary  from-[pink] mb-10 rounded-[25px] flex flex-col justify-center items-center p-3' >
                        <p className='text-center text-[white]'> Upgrade to PRO to get access to all features</p>
                        <motion.button   whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}   className='bg-[white] px-10 py-3 rounded-[30px] hover:bg-primary hover:text-[white] text-primary text-sm font-semibold mt-5'> Get Pro Now!</motion.button>

                     </div>


                   <img className='w-[3vw] h-[3vw] object-cover object-center rounded-full' src="./face.avif" alt="" />

                   <div >
                      <h3 className='text-sm font-bold'> Evano </h3>
                      <p className='text-sm text-grey'>Project Manager</p>
                   </div>
                </div>

            </div>

           


        </div>
    
    </div>
  )
}

export default SideMenu