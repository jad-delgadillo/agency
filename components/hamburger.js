import Link from 'next/link'
import React, {MutableRefObject, useEffect, useRef} from 'react'

const Hamburger = ({state}) => {

    let menu = useRef(null)

    useEffect(() => {
        if(state.clicked === false ) {
            // this is where we close our menu
            menu.style.display = 'none'
        } else if (
            state.clicked === true || 
            (state.clicked === true && state.initial === null )
        ) {
            // open our menu
            menu.style.display = 'block'
        }
    });

  return (
    <div ref={el => (menu = el)} className='z-20 top-0 bottom-0 left-0 right-0 fixed h-[100%] w-[100%] hidden'>
        <div className='bg-black z-10 top-0 bottom-0 left-0 right-0 fixed h-[100%] w-[100%] '>
            <div className='relative bg-red-600 h-[100%] overflow-hidden m-auto '>
                
                <div className='flex flex-col h-screen w-screen m-auto items-center justify-center text-white'>

                    <div className='flex md:flex-row flex-col h-screen w-screen m-auto justify-center items-center max-w-7xl text-white'>
                        <nav className='flex flex-col md:text-[7vw] text-[12vw] font-black  tracking-normal leading-tight'>
                            <div className='flex flex-col cursor-pointer'>
                                <Link href={'/opportunities'}><p className='hover:text-black transition-all'>Opportunities</p></Link>
                                <Link href={'/solutions'}><p className='hover:text-black transition-all'>Solutions</p></Link>
                                <Link href={'/contactUs'}><p className='hover:text-black transition-all'>Contact us</p></Link>
                                
                            </div>
                        </nav>
                        <div className='mx-10 md:my-0 my-5'></div>
                        <div className='flex flex-col mx-6'>
                            <h3 className='text-xl font-extrabold'>Our Promise</h3>
                            <p className='font-extralight'>
                                Seasons change and our love went cold
                                Feed the flame 'cause we can't let it go
                                Run away, but we're running in circles
                                Run away, running away in circles.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row text-lg justify-start w-screen max-w-7xl '>
                        <div className='flex md:flex-row mx-5 md:mx-0 flex-col w-screen justify-between absolute bottom-14 max-w-5xl'>
                            <h1 className=''>Locations:</h1>
                            

                                <h1 className=''>Dallas</h1>
                                <h1>Austin</h1>
                                <h1>New York</h1>
                                <h1>San Francisco</h1>
                                <h1>Beijing</h1>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hamburger