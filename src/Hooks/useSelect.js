import React, {useState} from 'react'

const useSelect = (stateInicial, dataOpciones) => {
  //State del custom hook
  const [categoria, setCategoria] = useState(stateInicial);

  const SelectNoticias = () => {
    return (
      <select
        className='browser-default'
        value={categoria}
        onChange={ (e) => setCategoria(e.target.value)}
      >        
      {
        dataOpciones.map( (data, idx) => (
          <option 
            key={idx} 
            value={data.value}
            >{data.label}
          </option>
        ))
      }
      </select> 
    )
  }
  return [SelectNoticias, categoria];
}

export default useSelect