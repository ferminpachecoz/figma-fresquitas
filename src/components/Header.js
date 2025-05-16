import "../styles/Header.scss"

export default function Header() {
  return (
    <div className='header'>
      <img src="3mosqueteros.png" alt="" />
      <div className="search-container">
          <input type="text" class="search" placeholder="¿Qué fresquitas querés comprar hoy?" />
          <i className="bi bi-search"></i>
      </div>
    </div>
  )
}
