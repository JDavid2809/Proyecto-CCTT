import React from 'react'
import logoCCTT from '../assets/logoCCTT.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube  } from "react-icons/fa";

const Footer =() => {
    return (
    <div className='bg-[#001427] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className='my-12 flex flex-col md:flex-row gap-10 '>
            <div className='md:w-1/2 space-y-8'>
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
            <img src={logoCCTT} alt=""  className='w-[130px] inline-block items-center'/><span className='text-white'>C C T T</span></a>
            <p className='md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, veniam. 
            Dolorum earum consectetur fugiat excepturi vero illum? Nam, aspernatur odio.</p>
            <div>
                <input type="email" name='email' id='email' placeholder='Ingresa tu correo' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                <input type="submit" value="Suscribirse" className='px-4 py-2 bg-primary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-secondary duration-300 transition-all' />
            </div>
            </div>
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className='space-y-6 mt-5'>
                    <h4 className='text-xl'>Plataformas</h4>
                    <ul className='space-y-3'>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Plataformas</h4>
                    <ul className='space-y-3'>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                        <a href="" className='block hover:text-gray-300'>Lorem, ipsum.</a>
                    </ul>
                </div>
                <div className='space-y-4 mt-5'>
                    <h4 className='text-xl'>Contactos</h4>
                    <ul className='space-y-3'>
                        <p className='block hover:text-gray-300'>(+52) 123-456-7890</p>
                        <p className='block hover:text-gray-300'>C C T T </p>
                        <p className='block hover:text-gray-300'>Tecamachalco.</p>
                        <p className='block hover:text-gray-300'>56844.</p>
                    </ul>
                </div>
                
            </div>
        </div>

        <hr/>

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
            <p>@Centro de Capacitación para el Trabajo Tecamachalco</p>
            <div className='flex items-center space-x-5'>
                <FaFacebook  className='w-8  h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 hover:text-vino'/>
                <FaInstagram className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300  hover:text-vino' />
                <FaTwitter className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300  hover:text-vino' />
                <FaYoutube  className='w-8 h-8 cursor-pointer hover:-translate-y-4 transition-all duration-300  hover:text-vino'/>
            </div>
        </div>
    </div>
    )
}

export default Footer