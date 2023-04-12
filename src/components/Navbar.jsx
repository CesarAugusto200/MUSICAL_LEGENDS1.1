import "../assets/Style/Navbar.css"
function Navbar() {
 

    return (
      <nav id="contenedor"  className="navbar navbar-expand-lg bg-body-tertiary">
      <div  className="container-fluid">
        <a className="navbar-brand" href="/Home">Musical <span> Legends</span></a>
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  className="navbar-toggler-icon"></span>
        </button>
        
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
           
            <li className="nav-item">
              <a id="Canto" className="nav-link" href="Canto">Cursos De Canto</a>
            </li>

            <li className="nav-item">
              <a  id="Musica" className="nav-link" href="Musica">Cursos De Musica</a>
            </li>


            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Ver Mas
              </a>
              <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="About">Sobre Nosotros</a></li>
                <li><a className="dropdown-item" href="Foro">Foro De comentarios</a></li>
                <li><a className="dropdown-item" href="FAQ">Preguntas Frecuentes</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="Agenda">Agenda Tu Cita</a></li>
                <li><a className="dropdown-item" href="Lista">Lista de Citas</a></li>
              </ul>
            </li>


           
          </ul>
       
        </div>
      </div>
    </nav>
  
    )
  }
  
  export default Navbar
  