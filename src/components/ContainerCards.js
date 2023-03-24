import './ContainerCards.css'

const ContainerCards = ({ pokemons }) => {
  
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
