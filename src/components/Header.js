import "../styles/Header.scss"
import { useState, useEffect } from "react"

export default function Header({ onSearch, initialValue = "", clearSearch }) {
  const [searchTerm, setSearchTerm] = useState(initialValue)

  // Update local state when initialValue changes
  useEffect(() => {
    setSearchTerm(initialValue)
  }, [initialValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    const valor = e.target.querySelector("input").value
    onSearch(valor)
  }
  return (
    <div className='header'>
      <img src="logo-improv.png" alt="" />
      <form className="search-container" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="search" 
            placeholder="¿Qué fresquitas querés comprar hoy?" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm ? (
            <i 
              className="bi bi-x-circle clear-icon" 
              onClick={() => {
                setSearchTerm("");
                clearSearch(); // Llama a la función que limpia los productos
              }}
              style={{ cursor: "pointer", marginLeft: "8px" }}
              title="Borrar búsqueda"
            ></i>
          ):(
            <i className="bi bi-search"></i>
          )}
      </form>
    </div>
  )
}
