import React from "react";
import { Link } from "react-router-dom";

function Peliculas() {
    return (
        <div className="App d-flex flex-column min-vh-100">

            <header className="header-bg text-center">
                <h1 className="header-bandera">Cinemática Boliviana</h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand nav-link-custom">Principal</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuNav"
                        aria-controls="menuNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
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
            <main className="container my-4 main-bg flex-grow-1">
                <div className="row">
                    <div className="col-md-8 d-flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="btn btn-outline-warning d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modal1"
                            style={{ borderColor: "orange" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(90deg, red, yellow, green)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <img src="https://img.icons8.com/ios-filled/24/ffa500/movie.png" alt="icono película 1" />
                            Resumen El ladrón de perros
                        </button>

                        <div className="modal fade" id="modal1" tabIndex="-1" aria-labelledby="modal1Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal1Label">"El ladrón de perros" narra la historia de Martín, un joven limpiabotas en La Paz, Bolivia, que cree que su mejor cliente, un sastre solitario llamado Novoa, es su padre. Martín decide robar el perro de Novoa, no por malicia, sino como un intento desesperado de acercarse a él y recibir afecto, creyendo que el perro es lo más preciado para el sastre</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-warning d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modal2"
                            style={{ borderColor: "orange" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(90deg, red, yellow, green)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <img src="https://img.icons8.com/ios-filled/24/ffa500/movie.png" alt="icono película 2" />
                            Resumen Los Andes no creen en Dios
                        </button>

                        <div className="modal fade" id="modal2" tabIndex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal2Label">"Los Andes no creen en Dios" es una película boliviana que explora las tensiones entre la modernidad y la tradición en un pueblo minero a principios del siglo XX. La historia sigue a Alfonso Claros, un joven escritor que llega a Uyuni, un lugar donde la codicia por el mineral y la búsqueda de fortuna entrelazan pasiones, frustraciones, y conflictos culturales y religiosos. </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-warning d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modal3"
                            style={{ borderColor: "orange" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(90deg, red, yellow, green)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <img src="https://img.icons8.com/ios-filled/24/ffa500/movie.png" alt="icono película 3" />
                            Resumen Engaño a primera vista
                        </button>

                        <div className="modal fade" id="modal3" tabIndex="-1" aria-labelledby="modal3Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal3Label">"Engaño a Primera Vista" es una película boliviana que sigue a dos hermanos nerds que buscan ganar un portátil de ensueño. Para lograrlo, deben recibir un beso de dos chicas populares en solo 48 horas, lo que los lleva a un plan lleno de engaños y situaciones cómicas. La película explora temas como la superficialidad, la amistad y la búsqueda de la felicidad a través de medios poco ortodoxos. '</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-warning d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modal4"
                            style={{ borderColor: "orange" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(90deg, red, yellow, green)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <img src="https://img.icons8.com/ios-filled/24/ffa500/movie.png" alt="icono película 4" />
                            Resumen Utama
                        </button>

                        <div className="modal fade" id="modal4" tabIndex="-1" aria-labelledby="modal4Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal4Label">Una pareja de ancianos ha vivido toda su vida en las desérticas llanuras de Bolivia. Sin embargo, cuando su vida allí se dificulta debido a una larga sequía, ambos deben enfrentarse al dilema de resistir o ser derrotados por el tiempo y el entorno.</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-warning d-flex align-items-center gap-2"
                            data-bs-toggle="modal"
                            data-bs-target="#modal5"
                            style={{ borderColor: "orange" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "linear-gradient(90deg, red, yellow, green)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <img src="https://img.icons8.com/ios-filled/24/ffa500/movie.png" alt="icono película 5" />
                            Resumen Boliviana
                        </button>

                        <div className="modal fade" id="modal5" tabIndex="-1" aria-labelledby="modal5Label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modal5Label">La película boliviana "Bolivia", dirigida por Adrián Caetano, narra la historia de Freddy, un inmigrante boliviano en Buenos Aires que trabaja como cocinero en un restaurante. La película explora temas de discriminación, pobreza y la búsqueda de una vida mejor, mostrando la difícil realidad de los inmigrantes indocumentados. </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card border-info mb-3">
                            <div className="card-header bg-info text-white">Web</div>
                            <div className="card-body">
                                <p className="card-text">Programación Web 2</p>
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

export default Peliculas;

