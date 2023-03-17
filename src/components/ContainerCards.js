import { useEffect } from 'react'
import './ContainerCards.css'
import { gsap } from 'gsap'

const ContainerCards = ({ pokemones, isLoading }) => {
  console.log(isLoading)
  useEffect(() => {
    const timeline = gsap.timeline();
    const pokeBox = document.querySelectorAll('.poke-box')
    const pokeId = document.querySelectorAll('.poke-id')
    const pokeName = document.querySelectorAll('.poke-name')
    const pokeImg = document.querySelectorAll('.poke-img')

    if (isLoading === false) {
      gsap.from(pokeBox, {
        opacity: 0,
        x: 50,
        y: 25,
        duration: 0.5,
        stagger: 0.5
      })

      gsap.from(pokeId, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.5,
        delay: 0.75
      })

      gsap.from(pokeName, {
        opacity: 0,
        y: 50,
        duration: 0.75,
        stagger: 0.5,
        delay: 1
      })

      gsap.from(pokeImg, {
        opacity: 0,
        y: 50,
        duration: 0.95,
        stagger: 0.5,
        delay: 1
      })
    }
  }, [isLoading])

  return (
    <div className="container text-center">
      <div className="row">
        {pokemones.map(poke => (
          <div className="col-12 col-md-6 col-lg-4 g-4" key={poke.id} onClick={event => window.location.href = '/pokemon/' + poke.name}>
            <div className={'poke-box ' + poke.types[0].type.name}>
              <div className='poke-info'>
                <h5 className="poke-name">{poke.name}</h5>
                <h4 className='poke-id'># {poke.id}</h4>
              </div>
              <img src={poke.sprites.other.dream_world.front_default} alt="Logo" className="poke-img" />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ContainerCards
