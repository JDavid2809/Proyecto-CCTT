import { useState } from 'react';
import logoCCTT from '../assets/logoCCTT.png'
import { FaUser } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";
import { FcMenu } from "react-icons/fc";
import { FaXmark } from "react-icons/fa6";
import {Link} from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems = [
        {link: "Inicio", path: "home"},
        {link: "Cursos", path: "cursos"},
        {link: "Docentes", path: "docentes"},
        {link: "Graduaciones", path: "graduaciones"},
    ]


    
    return (
    
    <>
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-secondary fixed top-0 right-0 left-0'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
            <div className='flex space-x-14 items-center'>
                <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                    <img src={logoCCTT} alt=""  className='w-10 inline-block items-center'/><span>C C T T</span></a>

                    <ul className='md:flex space-x-8 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                            <li key={link} className='group relative'>
                            <Link to={path} spy={true} activeClass='active' smooth={true} offset={-100} className='block text-gray-800 px-4 py-2 transition duration-300 ease-in-out transform hover:scale-110 hover:text-red-600 cursor-pointer'>
                            {link}
                            <span className='absolute left-0 bottom-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
                            </Link>
                            </li>
                            ))
                        }
                    </ul>

            </div>

            <div className='space-x-12 hidden md:flex items-center'>
            <button className='relative bg-gradient-to-r from-red-500 to-red-700 py-3 px-8 transition-transform transform hover:scale-110 duration-300 ease-in-out rounded shadow-xl text-white font-bold hidden items-center lg:flex overflow-hidden group'>
                <span className='absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20'></span>
                <span className='relative z-10'>Iniciar sesión</span>
            <FaUser className='ml-3 relative z-10' />
            </button>
            <button className='relative bg-gradient-to-r from-red-500 to-red-700 py-3 px-8 transition-transform transform hover:scale-110 duration-300 ease-in-out rounded shadow-xl text-white font-bold hidden items-center lg:flex overflow-hidden group'>
                <span className='absolute inset-0 bg-white opacity-10 transition-opacity duration-300 group-hover:opacity-20'></span>
                <span className='relative z-10'>Registrarse</span>
            <IoPersonAddSharp className='ml-3 relative z-10' />
            </button>
            </div>

            <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-7 h-7 text-vino' />) : (<FcMenu className='w-7 h-7 text-vino'/>)
                            }
                    </button>
            </div>

        </div>
    </nav>
    
    <div className={`space-y-4 px-4 pt-24 pb-5 bg-vino text-xl  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
            navItems.map(({link, path}) => <Link key={link} to={path} className='block hover:text-white' spy={true} activeClass='active' smooth={true} offset={-100} onClick={toggleMenu}>{link}</Link>)
        }
    </div>
    </>



    );
};

export default Navbar