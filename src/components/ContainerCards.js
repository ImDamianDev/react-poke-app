import { useEffect } from 'react'
import './ContainerCards.css'
import { gsap } from 'gsap'

const ContainerCards = ({ pokemons }) => {
  useEffect(() => {
    //const timeline = gsap.timeline();
    const cardsContain = document.querySelectorAll('.cards-contain')
    const pokeBox = document.querySelectorAll('.poke-box')
    const pokeId = document.querySelectorAll('.poke-id')
    const pokeName = document.querySelectorAll('.poke-name')
    const pokeImg = document.querySelectorAll('.poke-img')

    gsap.fromTo(pokeBox, {
      opacity: 0,
      x: 50,
      y: 10,
    }, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
    })

    gsap.from(pokeId, {
      opacity: 0,
      x: 25,
      y: 25,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5
    })

    gsap.from(pokeName, {
      opacity: 0,
      x: 25,
      y: 25,
      duration: 0.75,
      stagger: 0.1,
      delay: 0.5
    })

    gsap.fromTo(pokeImg, {
      opacity: 0,
      scale: 0.5,
      y: 50,
    },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        stagger: 0.1,
        delay: 0.5,
        ease: "elastic.out",
      })
  }, [pokemons])

  return (
    <div className="container text-center">
      <div className="row cards-contain">
        {pokemons.map(poke => (
          <div className="col-12 col-md-6 col-lg-4 g-4" key={poke.id} onClick={event => window.location.href = '/pokemon/' + poke.name}>
            <div className={'poke-box ' + poke.types[0].type.name}>
              <div className='poke-info'>
                <h5 className="poke-name">{poke.name}</h5>
                <h4 className='poke-id'># {poke.id}</h4>
              </div>
              <img src={poke.img} alt="Logo" className="poke-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContainerCards
