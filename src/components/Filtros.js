import React, { useState } from 'react'
import "../styles/Filtros.scss"

export default function Filtros({ onFilter, selectedFilter, onCheck, marcas, onMarca }) {
  const [mostrarMas, setMostrarMas] = useState(false)
  const supermarkets = ["Coto", "Disco", "Carrefour", "Chango Mas", "Día", "Bonprix"]
  const handleCheckbox=(e)=>{
    const isChecked = e.target.checked;
    const value = isChecked ? e.target.value : "";  // Si está desmarcado, string vacío
    onCheck(value)
  }
  return (
    <div className='filtros'>
      <p className='mb-1'>Preferencias</p>
      <div className="form-check mb-4">
        <input 
        className="form-check-input" 
        name='radio-sin-alcohol' 
        type="checkbox" 
        value="Sin Alcohol" 
        id="checkbox-gay" 
        onChange={(e) => handleCheckbox(e)}
        />
        <label className="form-check-label" htmlFor="checkbox-gay">
          Soy gay
        </label>
      </div>
      <p className='mb-1'>Marcas</p>
      <div className='all-marcas'>
        <div className="form-check">
          <input 
          className="form-check-input" 
          type="radio" 
          name='radio-marcas' 
          value="" 
          defaultChecked
          id={`radio-todas`}
          onChange={(e) => onMarca(e.target.value)}
          />
          <label className="form-check-label" htmlFor={`radio-todas`}>
            Todas
          </label>
        </div>
        {marcas &&
          (mostrarMas ? marcas : marcas.slice(0, 10)).map((item, index) => (
            <div className="form-check" key={index}>
              <input 
              className="form-check-input" 
              type="radio" 
              name='radio-marcas' 
              value={item} 
              id={`radio-${item}`}
              onChange={(e) => onMarca(e.target.value)}
              />
              <label className="form-check-label" htmlFor={`radio-${item}`}>
                {item}
              </label>
            </div>
          ))
        }
        <button className='button-mostrar-mas' onClick={() => setMostrarMas(!mostrarMas)}>
          {mostrarMas ? 'Mostrar Menos' : 'Mostrar Más'}
        </button>
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
