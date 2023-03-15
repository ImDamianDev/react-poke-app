import './Hero.css' // Importa el archivo de estilos CSS para el componente
import React from 'react'
import ContainerCards from './ContainerCards'

const Hero = () => {

  return (
    <div className='hero'> {/* Contenedor principal */}
      <h1 className='hero-title'> {/* Título principal */}
        Pokedex
      </h1>
      <ContainerCards />
    </div>
  )
}

export default Hero