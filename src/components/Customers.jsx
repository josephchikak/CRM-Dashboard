import React from 'react'

const Customers = () => {

   
  return (
    <div className='relative md:w-[fit] w-full bg-background p-10 rounded-[30px] shadow-lg overflow-x-auto '>
            <div className='flex justify-between pb-10 sm:flex-row flex-col gap-5 '>
                <div>

                        <h3 className='font-bold text-[26px]'>All Customers </h3>
                        <p className='text-active text-sm'>Active Members</p>   

                </div>

                <form>   
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative  w-[216px]">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900  rounded-lg bg-[#F9FBFF] focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                      
                    </div>
                 </form>

            
            </div>
           
            <table className="table-auto text-xs sm:text-sm w-full lg:w-[968px] h-fit lg:h-[587px] text-left rtl:text-right overflow-x-auto">
                <thead className=' text-grey bg-gray-50 text-poppins font-normal border-b border-grey'>
                    <tr>
                        <th className='pr-20 py-3'>Customer Name</th>
                        <th className='pr-20 py-3'>Company</th>
                        <th className='pr-20 py-3'>Phone Number</th>
                        <th className='pr-20 py-3'>Email</th>
                        <th className='pr-20 py-3'>Country</th>
                        <th className='pr-20 py-3'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b border-grey px-6 py-3' >
                        <td>Jane Cooper</td>
                        <td>Microsoft</td>
                        <td>(225) 555-0118</td>
                        <td>jane@microsoft.com</td>
                        <td>United States</td>
                        <td> <button type='button' className='text-activeText sm:border border-activeText sm:bg-active/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Active</button></td>
                    </tr>
                    <tr className='bg-white border-b border-grey '>
                        <td>Floyd Miles</td>
                        <td>Yahoo</td>
                        <td>(205) 555-0100</td>
                        <td>floyd@yahoo.com</td>
                        <td>Kiribati</td>
                        <td> <button type='button' className='text-inactiveText sm:border border-inactiveText sm:bg-inactive/[38%] rounded-lg  w-[6vw] py-[10px] text-center '>Inactive</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Ronald Richards</td>
                        <td>Adobe</td>
                        <td>(302) 555-0107</td>
                        <td>ronald@adobe.com</td>
                        <td>Israel</td>
                        <td> <button type='button' className='text-inactiveText sm:border border-inactiveText sm:bg-inactive/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Inactive</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Marvin McKinney</td>
                        <td>Tesla</td>
                        <td>(252) 555-0126</td>
                        <td>marvin@tesla.com</td>
                        <td>Iran</td>
                        <td> <button type='button' className='text-activeText sm:border border-activeText sm:bg-active/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Active</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Jerome Bell</td>
                        <td>Google</td>
                        <td>(629) 555-0129</td>
                        <td>jerome@google.com</td>
                        <td>Réunion</td>
                        <td> <button type='button' className='text-activeText sm:border border-activeText sm:bg-active/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Active</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Kathryn Murphy</td>
                        <td>Microsoft</td>
                        <td>(406) 555-0120</td>
                        <td>kathryn@microsoft.com</td>
                        <td>Curaçao</td>
                        <td> <button type='button' className='text-activeText sm:border border-activeText sm:bg-active/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Active</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Jacob Jones</td>
                        <td>Yahoo</td>
                        <td>(208) 555-0112</td>
                        <td>jacob@yahoo.com</td>
                        <td>Brazil</td>
                        <td> <button type='button' className='text-activeText sm:border border-activeText sm:bg-active/[38%] rounded-lg    w-[6vw] py-[10px]  sm:py-[10px] text-center '>Active</button></td>

                    </tr>
                    <tr className='bg-white border-b border-grey'>
                        <td>Kristin Watson</td>
                        <td>Facebook</td>
                        <td>(704) 555-0127</td>
                        <td>kristin@facebook.com</td>
                        <td>Åland Islands</td>
                        <td> <button type='button' className='text-inactiveText sm:border border-inactiveText sm:bg-inactive/[38%] rounded-lg   w-[6vw] py-[10px] text-center '>Inactive</button></td>

                    </tr>
                </tbody>
            </table>

      
            <div className='flex justify-between text-grey pt-10 text-sm sm:flex-row flex-col gap-3'>
                <p>showing data 1 to 8 of 256k entries</p>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-2" aria-label="Pagination">
                        <a href="#" className="relative inline-flex items-center rounded-md px-2 py-2 text-text  bg-grey bg-opacity-30 focus:bg-primary  focus:text-[white]">
                    
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                        </a>

                      
                        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center justify-center focus:bg-primary bg-grey bg-opacity-30  rounded-md w-[4vh] h-[4vh] text-sm  text-text  focus:text-[white]">1</a>

                        <a href="#" className="relative inline-flex items-center justify-center rounded-md mx-2 w-[4vh] h-[4vh] text-sm  text-text bg-grey bg-opacity-30  focus:bg-primary  focus:text-[white]">2</a>

                        <a href="#" className="relative hidden items-center justify-center rounded-md mx-2 w-[4vh] h-[4vh] text-sm  text-text bg-grey bg-opacity-30  focus:bg-primary focus:text-[white] md:inline-flex">3</a>

                        <a href="#" className="relative hidden items-center justify-center rounded-md mx-2 w-[4vh] h-[4vh] text-sm  text-text bg-grey bg-opacity-30  focus:bg-primary focus:text-[white] md:inline-flex">4</a>

                        <a href="#" className="relative hidden items-end justify-center rounded-md mx-2 w-[4vh] h-[4vh] text-sm  text-text  focus:bg-primary md:inline-flex">. . .</a>

                        <a href="#" className="relative inline-flex items-center justify-center rounded-md mx-2 w-[4vh] h-[4vh] text-sm  text-text  bg-grey bg-opacity-30 focus:bg-primary focus:text-[white] ">40</a>

                        <a href="#" className="relative inline-flex justify-center items-center rounded-md mx-2  w-[4vh] h-[4vh]  text-text bg-grey bg-opacity-30  focus:bg-primary focus:text-[white]">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                        </a>
                    </nav>
                </div>
             </div> 
         

    </div>
  )
}

export default Customers