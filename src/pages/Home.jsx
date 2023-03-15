// **** Imports ***
//styles
import './Pokemon.css';
//components
import Hero from '../components/Hero'
import ButtonsType from '../components/ButtonsType';

function Home() {
    return (
        <>
            <h1 className='app-title py-2 ps-5'> {/* Título principal */}
                Poke App
            </h1>
            <ButtonsType />
            <Hero />
        </>
    );
}

export default Home;
