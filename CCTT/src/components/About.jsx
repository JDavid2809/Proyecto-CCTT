import logoCCTT from '../assets/logoCCTT.png';
import {motion} from "framer-motion"
import { fadeIn } from "../variants"

const About = () => {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto" id='docentes'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 space-y-10'>
                <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false , amount:0.7}}
                className='md:w-1/2'>
                    <img src={logoCCTT} alt="" />
                </motion.div>

                <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false , amount:0.7}} 
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal'>Lorem ipsum dolor sit amet consectetur <span className='text-vino'>Lorem ipsum dolor sit.</span></h2>
                    <p className='text-tartiary text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a excepturi animi. Accusantium quasi ducimus nobis? Similique
                    nesciunt possimus autem sed saepe, dolorem iure reprehenderit?</p>
                    <button className='btnSecondary'>Saber más</button>
                </motion.div>
            </div>

            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false , amount:0.7}}
                className='md:w-1/2'>
                    <img src={logoCCTT} alt=""/>
                </motion.div>

                <motion.div 
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false , amount:0.7}}
                className='md:w-2/5'>
                    <h2 className='md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal'>Lorem ipsum dolor sit amet consectetur <span className='text-vino'>Lorem ipsum dolor sit.</span></h2>
                    <p className='text-tartiary text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a excepturi animi. Accusantium quasi ducimus nobis? Similique
                    nesciunt possimus autem sed saepe, dolorem iure reprehenderit?</p>
                    <button className='btnSecondary'>Saber más</button>
                </motion.div>
            </div>
        </div>
    )
}

export default About