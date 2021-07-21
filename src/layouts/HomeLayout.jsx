import React from 'react'
import Navbar from '../components/nav/Navbar'
import Footer  from '../components/footer/Footer'

function HomeLayout({children}) {
    return (
        <div className="">
            <div className="w-full sticky top-0 z-50">
                <Navbar/>
            </div>
            <div className="child min-h-screen bg-gray-50 z-20">
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomeLayout
