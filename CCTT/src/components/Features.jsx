import logoCCTT from '../assets/logoCCTT.png';

import {motion} from "framer-motion"
import { fadeIn } from "../variants"

const Features = () => {
    return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id='cursos'>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false , amount:0.7}}
            className="lg:w-1/4">
                <h3 className="text-3xl text-vino font-bold mb-10">Por que deberias de estudiar aquí</h3>
                <p className="text-base text-tartiary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio vitae veniam consequuntur delectus debitis voluptatum voluptatem eius velit possimus.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false , amount:0.7}}
            className="w-full lg:w-3/4">
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded h-85 shadow-3xl p-8 items-center flex justify-center duration-300 ease-in-out transform hover:scale-110 cursor-pointer'>
                    <div>
                        <img src={logoCCTT} alt="" />
                        <h5 className='text-2xl font-semibold text-secondary px-5 text-center mt-5'>
                            Lorem ipsum dolor sit amet consectetur.
                        </h5>
                    </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded h-85 shadow-3xl p-8 items-center flex justify-center duration-300 ease-in-out transform hover:scale-110 cursor-pointer'>
                    <div>
                        <img src={logoCCTT} alt="" />
                        <h5 className='text-2xl font-semibold text-secondary px-5 text-center mt-5'>
                            Lorem ipsum dolor sit amet consectetur.
                        </h5>
                    </div>
                    </div>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded h-85 shadow-3xl p-8 items-center flex justify-center duration-300 ease-in-out transform hover:scale-110 cursor-pointer'>
                    <div>
                        <img src={logoCCTT} alt="" />
                        <h5 className='text-2xl font-semibold text-secondary px-5 text-center mt-5'>
                            Lorem ipsum dolor sit amet consectetur.
                        </h5>
                    </div>
                    </div>
                    </div>
            </motion.div>
        </div>
    </div>
    )
}

export default Features