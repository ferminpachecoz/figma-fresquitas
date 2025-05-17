import React from 'react'
import "../styles/Filtros.scss"

export default function Filtros({ onFilter, selectedFilter }) {
  const supermarkets = ["Coto", "Disco", "Carrefour", "Chango Mas", "Día", "Bonprix"]

  return (
    <div className='filtros'>
      <p className='mb-1'>Género</p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-femenino" />
        <label className="form-check-label" htmlFor="checkbox-femenino">
          Femenino
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-masculino" />
        <label className="form-check-label" htmlFor="checkbox-masculino">
          Masculino
        </label>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-nobinario" />
        <label className="form-check-label" htmlFor="checkbox-nobinario">
          No binario
        </label>
      </div>
      <p className='mb-1'>Marcas</p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-quilmes" />
        <label className="form-check-label" htmlFor="checkbox-quilmes">
          Quilmes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Imperial
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Stella Artois
        </label>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Heineken
        </label>
      </div>
      <p  className='mb-1'>Supermercado</p>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="radio" 
          name="radio-filtros" 
          value="" 
          defaultChecked 
          id="radio-all" 
          onChange={(e) => onFilter(e.target.value)}
        />
        <label className="form-check-label" htmlFor="radio-all">
          Todos
        </label>
      </div>
      {
        supermarkets.map((item,index)=>(
          <div className="form-check" key={index}>
            <input 
              className="form-check-input" 
              type="radio" 
              name="radio-filtros" 
              value={item} 
              id={"radio-"+item} 
              onChange={(e) => onFilter(e.target.value)}
            />
            <label className="form-check-label" htmlFor={"radio-"+item}>
              {item}
            </label>
          </div>
        ))
      }
    </div>
  )
}
