import React from 'react'
import LOGO from '../assets/logo1.png'
import Navbar from '../components/Navbar'


const Home = () => {
    return (
        <div className='bg-slate-500 h-screen '>
            <Navbar />
            <div className='flex items-center mx-24 space-x-16 pt-24'>
                <img className='h-96' src={LOGO}></img>
                <div className='josefin-sans'>
                    <p className=''>Lokkee is a passionate programming freelancer with top-notch experience in the web app and desktop application development. This includes full front-end design, brand identity, graphics, illustrations, etc.</p>
                    <div className='space-x-10 flex justify-center pt-8'>
                        <button className='bg-orange-400 hover:bg-lime-400 hover:scale-105 rounded-lg p-2'>Github</button>
                        <button className='bg-orange-400 hover:bg-teal-500 hover:scale-105 rounded-lg p-2'>Download CV</button>
                    </div>
                </div>
            </div></div>
    )
}

export default Home