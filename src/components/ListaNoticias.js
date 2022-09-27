import React from 'react'
import Noticia from './Noticia'

const ListaNoticias = ({noticias}) => {
  return (
    <div className='row'>
      {
        noticias.map( (noticia, idx) => (
          <div key={idx}>
            <Noticia 
              noticia={noticia}
            />
          </div>
        ))
      }
    </div>
  )
}

export default ListaNoticias