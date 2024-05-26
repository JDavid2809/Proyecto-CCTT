import logoCCTT from '../assets/logoCCTT.png';
import Banner from '../shared/Banner';

const Home = () =>{
    return(
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id='home'>
            <Banner logoCCTT={logoCCTT} heading="Centro de Capacitación para el Trabajo Tecamachalco A.C" subheading="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates culpa iusto maiores,  
            reiciendis quam assumenda facilis eveniet consequatur eligendi numquam similique hic expedita atque." btn1={'Iniciar'}  btn2={'Saber más'}/>
        </div>
    );
};

export default Home;