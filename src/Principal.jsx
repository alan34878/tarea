import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Principal.css';

function Principal() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Título con fondo de bandera */}
      <header className="header-bg text-center">
        <h1 className="header-bandera">Cinemática Boliviana</h1>
      </header>

      {/* Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand nav-link-custom">Principal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menuNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/pag2" className="nav-link nav-link-custom">Películas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container my-4 main-bg flex-grow-1">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3">
                  <img 
                    src="https://m.media-amazon.com/images/M/MV5BMTc4ODk2MTk3MV5BMl5BanBnXkFtZTgwNTI2NTMxNzE@._V1_.jpg" 
                    className="card-img-top rounded-pill" 
                    alt="" 
                    style={{ objectFit: 'cover', height: '150px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Actor</h5>
                    <p className="card-text">Reynaldo Pacheco</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <img 
                    src="https://cd1.eju.tv/wp-content/uploads/2022/11/img_6383e097c76ce.jpg" 
                    className="card-img-top rounded-pill" 
                    alt="Imagen 2" 
                    style={{ objectFit: 'cover', height: '150px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Actor</h5>
                    <p className="card-text">David Santalla</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <img 
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRniT03bPR_y3c0fFWgehkHyKmO39AVW_MzQ3TNX18SLi9bMTOL-k1qpOnR2xmUsdywG6GwRKu8AddlawS9jDv1Wcga65jqBz_glvvbeXTn" 
                    className="card-img-top rounded-pill" 
                    alt="Imagen 3" 
                    style={{ objectFit: 'cover', height: '150px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Actor</h5>
                    <p className="card-text">Milton Cortez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publicidad */}
          <div className="col-md-4">
            <div className="card border-info mb-3">
              <div className="card-header bg-info text-white">Web </div>
              <div className="card-body">
                <p className="card-text">Programacion Web 2</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 footer-fluorescente">
  <p>© 2025 Cinemática Boliviana - Desarrollado por [Alan Fernando Peralta Luna]</p>
</footer>

    </div>
  );
}

export default Principal;

