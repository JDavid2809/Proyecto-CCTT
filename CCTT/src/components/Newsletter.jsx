import React from 'react'
import Banner from '../shared/Banner'
import logoCCTT from '../assets/logoCCTT.png'

const Newsletter = () => {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        <Banner logoCCTT={logoCCTT} heading="Lorem ipsum dolor sit ametr!" subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates culpa iusto maiores,  
        reiciendis quam assumenda facilis eveniet consequatur eligendi." btn1={'Iniciar'}  btn2={'Saber más'}/>
    </div>
  )
}

export default Newsletter