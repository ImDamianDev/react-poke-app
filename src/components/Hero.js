import './Hero.css' // Importa el archivo de estilos CSS para el componente
import React from 'react'
import ContainerCards from './ContainerCards'
import ButtonsType from '../components/ButtonsType';

const Hero = () => {

  return (
    <div className='hero'> {/* Contenedor principal */}
      <h1 className='hero-title'> {/* Título principal */}
        Pokedex
      </h1>
      <hr />
      <h3 className='filter-title'>
        Tipo
      </h3>
      <ButtonsType />
      <hr />
      <ContainerCards />
    </div>
  )
}

export default Hero