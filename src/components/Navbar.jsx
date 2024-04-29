import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-slate-600 shadow-xl'> <nav className='flex items-center justify-between p-4'>
            <h1 className='flex justify-start text-2xl'>Nishanth SPK.</h1>
            <ul className='flex justify-center gap-4 text-red-500'>

                <li className='border-2 rounded-lg p-1 hover:bg-white'><a href="/home">Home</a></li>
                <li className='border-2 rounded-lg p-1  hover:bg-white'><a href="/about">About</a></li>
                <li className='border-2 rounded-lg p-1  hover:bg-white'><a href="/contact">Contact</a></li>
                <li className='border-2 rounded-lg p-1  hover:bg-white'><a href="/resources">Resources</a></li>
            </ul>
            <button className='bg-orange-400 rounded-lg hover:scale-105 hover:bg-cyan-100 p-2'>Log In</button>

        </nav></div>
    )
}

export default Navbar