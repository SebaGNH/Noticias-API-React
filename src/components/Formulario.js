import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';
import dataOpcionesCategorias from '../data/dataOpcionesCategorias';
const Formulario = ({setCategoria}) => {



  //Iniciamos Custom Hook
  const [SelectNoticias, categoria] = useSelect('technology',dataOpcionesCategorias);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  }

  return (
    <div className={`row grey darken-2 ${styles.buscador}`}>
      <form action="" onSubmit={submitHandler}>
        <h2 className={styles.h2}>Encuentra Noticias por categoría</h2>

        <SelectNoticias />

        <div className="input-fieldcol s12"></div>
        <input type="submit" className={`btn-large amber darken-2 ${styles['btn-block']}`} value="Buscar" />
      </form>
    </div>
  )
}

export default Formulario