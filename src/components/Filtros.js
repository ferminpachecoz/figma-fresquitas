import React from 'react'
import "../styles/Filtros.scss"

export default function Filtros() {
  return (
    <div className='filtros'>
      <p>Género</p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-femenino" />
        <label className="form-check-label" for="checkbox-femenino">
          Femenino
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-masculino" />
        <label className="form-check-label" for="checkbox-masculino">
          Masculino
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-nobinario" />
        <label className="form-check-label" for="checkbox-nobinario">
          No binario
        </label>
      </div>
      <p>Marcas</p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="checkbox-quilmes" />
        <label className="form-check-label" for="checkbox-quilmes">
          Quilmes
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Imperial
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Stella Artois
        </label>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Heineken
        </label>
      </div>
      <p>Supermercado</p>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Dia
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Coto
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Chango Más
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Disco
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Bonprix
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Carrefour
        </label>
      </div>
    </div>
  )
}
