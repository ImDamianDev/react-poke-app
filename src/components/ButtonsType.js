//hooks
import { useState, useEffect } from 'react';
//Api
import * as API from "../services/pokemones";
import './ButtonsType.css'

const ButtonsType = () => {

  const [types, setTypes] = useState([]);

  const filtrar = (tipo) => {
    alert(tipo)
  }

  useEffect(() => {
    let pokeType = []
    API.getType().then((results) => {
      //recorriendo los resultados
      results.forEach((type) => {
        //almacenando el una variable el nombre de cada poquemon encontrado
        let typeName = type.name
        pokeType.push(typeName)
      })
      setTypes(pokeType)
    })
  }, []);
    

  return (
    <div className='container buttons-type px-3'>
      <button onClick={() => filtrar("borrar")} className='button-type'>
        Todos
      </button>
      <div className='buttons-type-list'>
        {types.map((type) => {
          return (
            <button onClick={() => filtrar(type)} className={'button-type ' + type}>
              {type}
            </button>
          )
        }
        )}
      </div>
    </div>
  )
}

export default ButtonsType