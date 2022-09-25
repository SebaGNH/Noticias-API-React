import React,{Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  useEffect( () => {
    const consultarApi = async () => {
      const urlAPI =`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a7c6c7d295a940b38bf66cfecd98fd9c`;

      const respuesta = await fetch(urlAPI);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles)
    }
    consultarApi();
  }, [categoria]);


  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      /> 
    <div className="container">
      <Formulario
      setCategoria={setCategoria}
      />
    </div>
    </Fragment>
  );
}

export default App;
