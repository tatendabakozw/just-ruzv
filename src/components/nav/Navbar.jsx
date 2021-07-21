import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import Navdropdown from './Navdropdown'
import {MenuAlt1Icon} from '@heroicons/react/solid'
import { nav_options } from '../../data/nav_option'

function Navbar() {
    const [shadowOn, setShadowOn] = useState(false)

    // put shadow on after scrolling down
    const toggleShadow = () => {
      if (window.scrollY >= 400) {
        setShadowOn(true)
      } else {
        setShadowOn(false)
      }
    }

    //adding listener to the scroll event
    useEffect(()=>{
        window.addEventListener('scroll', toggleShadow)
    },[])

    return (
        <nav className={`${shadowOn ? "shadow bg-white" : "shadow-none bg-blue-900" } z-50 transition duration-500 ease-in-out flex flex-row items-center lg:px-32 md:px-16 px-4 h-20`}>
            <span className="">
                <img src={logo} alt="logo" className="w-32" />
            </span>
            <div className="flex-grow"></div>
            <div className="md:flex hidden flex-row items-center">
                {
                    nav_options.map(option=>(
                        <span key={option.id} className={`${shadowOn ? "text-gray-700" : "text-white" } text-sm ml-4 transition duration-500 ease-in-out cursor-pointer uppercase `}>
                            {option.name}
                        </span>
                    ))
                }
                <span className={`${shadowOn ? "text-blue-900 rounded-full border border-blue-900 hover:bg-gray-50" : "text-white rounded-full border border-white hover:bg-blue-800" } text-sm ml-4 transition duration-500 ease-in-out cursor-pointer uppercase py-2 px-6 font-semibold`}>Let's Talk</span>
            </div>
            <div className="md:hidden flex">
                <Navdropdown icon={<MenuAlt1Icon height={24} width={24} className={`${shadowOn ? "text-gray-700" : ""}text-white`} />}/>
            </div>
        </nav>
    )
}

export default Navbar
