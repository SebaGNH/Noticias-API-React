import React, {Fragment} from 'react'

const Noticia = ({noticia}) => {

  const imagen = (noticia.urlToImage)? 
  <div className="card-image">
    <img src={noticia.urlToImage} alt={noticia.title} />
    <span className='card-title'>{noticia.source.name}</span>
  </div>  
  : null;
  return (
    <div className='col s12 m6 l4'>
      <div className="card grey">
        {imagen}

        <div className="card-content ">
          <h3>{noticia.title}</h3>
          <p>{noticia.description}</p>
        </div>

        <div className="card-action">
          <a 
            href={noticia.url} 
            target="_blank"
            className='waves-effect waves-light btn'
            >Ver Noticia Completa.</a>
        </div>

      </div>
    </div>

  )
}

export default Noticia