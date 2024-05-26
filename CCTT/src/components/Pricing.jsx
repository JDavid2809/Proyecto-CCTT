import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import {motion} from "framer-motion"
import { fadeIn } from "../variants"

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        {name:"Inicio", monthlyPrice: 19, yearlyPrice: 199, 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae voluptatum labore" , icon: <TbPointFilled className=" w-10 h-10 text-green-400"/>},
        {name:"Avanzado", monthlyPrice: 39, yearlyPrice: 399,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae voluptatum labore " , icon: <TbPointFilled className=" w-10 h-10 text-green-400"/> },
        {name:"Premium", monthlyPrice: 99, yearlyPrice: 599, 
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae voluptatum labore ", icon: <TbPointFilled className=" w-10 h-10 text-green-400"/>}, 
    ]

    return (
        <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="graduaciones">
            <div className="text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-vino mb-3">Conoce nuestras ofertas</h2>
                <p className="text-secondary md:w-1/3 mx-auto px-4 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae voluptatum labore 
                voluptatem et magnam architecto, libero inventore mollitia laborum?</p>

        <div className="mt-16 flex justify-center items-center">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                <span className="mr-4 text-2xl font-semibold text-gray-700">Mensual</span>
                <div className="relative">
                <input type="checkbox" id="toggle" className="sr-only" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                <div className={`block w-16 h-8 rounded-full transition duration-300 ease-in-out ${isYearly ? "bg-gray-300" : "bg-gray-300"} shadow-lg`}></div>
                <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition transform duration-300 ease-in-out ${isYearly ? "translate-x-8 bg-white" : "bg-white"} shadow-md`}></div>
                <div className={`absolute left-1 top-1 w-6 h-6 rounded-full transition transform duration-500 ease-in-out ${isYearly ? "translate-x-8 bg-red-600" : "bg-blue-600"} shadow-lg`}></div>
            </div>
                <span className="ml-4 text-2xl font-semibold text-gray-700">Anual</span>
            </label>
        </div>

            </div>

            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false , amount:0.7}}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounde-lg shadow-3xl rounded-3xl duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.description}</p>
                        <p className="mt-5 text-center text-blue-400 text-4xl font-bold">
                            {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}` } <span className="text-base text-tartiary font-medium">/{isYearly ? 'Anual' : 'Mensual'}</span>
                        </p>
                        <ul className="mt-4 space-y-2 px-4">
                            <li className="flex gap-2 items-center">{pkg.icon}Lorem, ipsum dolor.</li>
                            <li className="flex gap-2 items-center">{pkg.icon}Lorem, ipsum..</li>
                            <li className="flex gap-2 items-center">{pkg.icon}ipsum dolor.</li>
                            <li className="flex gap-2 items-center">{pkg.icon}mollitia laborum.</li>
                            <li className="flex gap-2 items-center">{pkg.icon}Lsit amet consectetur.</li>
                        </ul>   
                    </div>)
                }
            </motion.div>
        </div>
    )
}

export default Pricing