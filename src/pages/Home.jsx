import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import logo_FanWiki from "../assets/img/logo_FanWiki.ico";
import logo_theSimpsonsApi from "../assets/img/logo_theSimpsonsApi.webp";
import logo_pokeApi from "../assets/img/logo_pokeApi.png";
import logo_bobsBurgerApi from "../assets/img/logo_bobsBurgerApi.ico";
import logo_theStarWarsApi from "../assets/img/logo_theStarWarsApi.png";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="container mt-5">
            <p className="text-center">
                <img
                    src={logo_FanWiki}
                    style={{
                        height: "150px",
                        width: "auto",
                    }}
                />
            </p>
            <p className="lead text-center">
                Este proyecto es una{" "}
                <span className="fw-bold">
                    <span className="text-danger">Fan</span>{" "}
                    <span className="text-primary">Wiki</span>
                </span>{" "}
                interactiva construida con React, inspirada en el concepto del{" "}
                <em>Star Wars Databank</em>, pero llevada un paso más allá.
            </p>

            <p>
                La aplicación consume distintas APIs públicas para mostrar
                información detallada sobre personajes, objetos, mundos y
                universos ficticios, permitiendo al usuario explorar contenido y
                guardarlo en una lista de{" "}
                <strong>favoritos / read later</strong>.
            </p>

            <h3 className="mt-4">¿Qué se practica?</h3>

            <ul>
                <li>
                    Consumo de APIs REST con <strong>fetch</strong>.
                </li>
                <li>
                    Gestión de estado global con <strong>Context</strong>.
                </li>
                <li>
                    Rutas dinámicas con <strong>React Router</strong>.
                </li>
                <li>Componentización y reutilización de vistas.</li>
                <li>
                    Diseño sencillo usando <strong>Bootstrap</strong>.
                </li>
            </ul>

            <h3 className="mt-5 mb-3">Universos incluidos</h3>

            <p>
                Para aumentar la dificultad y riqueza del proyecto, la
                aplicación no se limita a una sola API, sino que integra{" "}
                <strong>cuatro universos distintos</strong>:
            </p>

            <ul className="list-unstyled">
                <li className="mb-3">
                    Utilizando la{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.swapi.tech/"
                    >
                        <img
                            src={logo_theStarWarsApi}
                            alt="The Star Wars API"
                            style={{ height: "35px", verticalAlign: "bottom" }}
                        />{" "}
                        Api
                    </a>{" "}
                    de{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/phalt"
                    >
                        <i className="fa-brands fa-github"></i> Paul Hallett
                    </a>
                    , para personajes, planetas y vehículos del universo Star
                    Wars.
                </li>

                <li className="mb-3">
                    Utilizando la{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://thesimpsonsapi.com/"
                    >
                        <img
                            src={logo_theSimpsonsApi}
                            alt="The Simpsons API"
                            style={{ height: "35px", verticalAlign: "bottom" }}
                        />
                    </a>{" "}
                    de{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Facug03"
                    >
                        <i className="fa-brands fa-github"></i> FacuG03
                    </a>
                    , para explorar personajes del universo Simpsons.
                </li>

                <li className="mb-3">
                    Utilizando la{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://pokeapi.co/"
                    >
                        <img
                            src={logo_pokeApi}
                            alt="PokeAPI"
                            style={{ height: "40px", verticalAlign: "bottom" }}
                        />
                    </a>{" "}
                    de{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/pokeapi"
                    >
                        <i className="fa-brands fa-github"></i> PokeAPI Team
                    </a>
                    , para mostrar Pokémon, habilidades y estadísticas.
                </li>

                <li className="mb-3">
                    Utilizando la{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.bobsburgersapi.com/"
                    >
                        <img
                            src={logo_bobsBurgerApi}
                            alt="Bob's Burgers API"
                            style={{ height: "40px", verticalAlign: "bottom" }}
                        />
                        Bob's Burgers API
                    </a>{" "}
                    de{" "}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/zachspiel"
                    >
                        <i className="fa-brands fa-github"></i> Zachary
                        Spielberger
                    </a>
                    , para contenido del universo Bob’s Burgers.
                </li>
            </ul>

            <h3 className="mt-5">
                <i className="fa-solid fa-heart text-danger me-2"></i>
                Funcionalidad de favoritos
            </h3>

            <p>
                Cada elemento puede guardarse en una lista de{" "}
                <strong>favoritos</strong>, accesible desde cualquier parte de
                la aplicación gracias al uso de <strong>Context</strong>. Esto
                permite al usuario crear su propia lista personalizada de
                contenido para consultar más tarde.
            </p>

            <div className="text-center mt-4 mb-5">
                <img
                    src="https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true"
                    alt="Demo del proyecto"
                    className="img-fluid rounded shadow"
                    style={{ width: "700px" }}
                />
            </div>

            <h3 className="mt-5">
                <i className="fa-solid fa-rocket text-warning me-2"></i>
                Funcionalidades avanzadas
            </h3>

            <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                    <h5>
                        <i className="fa-solid fa-database text-primary me-2"></i>
                        Persistencia con Local Storage
                    </h5>
                    <ul className="mt-2">
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            La aplicación guarda el estado global (
                            <strong>store</strong>) en{" "}
                            <strong>localStorage</strong>.
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Al recargar la página, los datos se restauran
                            automáticamente.
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Reduce llamadas innecesarias a la API de Star Wars.
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Mejora el rendimiento y la experiencia en conexiones
                            lentas.
                        </li>
                        <li className="mt-2 fst-italic text-muted">
                            <i className="fa-solid fa-brain me-2"></i>
                            Implementado usando <strong>
                                localStorage
                            </strong> + <strong>useEffect</strong>.
                        </li>
                    </ul>
                </li>

                <li className="list-group-item mt-3">
                    <h5>
                        <i className="fa-solid fa-magnifying-glass text-info me-2"></i>
                        Barra de búsqueda con autocompletado
                    </h5>
                    <ul className="mt-2">
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Barra de búsqueda global con autocompletado en
                            tiempo real.
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Soporta búsqueda de:
                            <ul className="mt-1">
                                <li>
                                    <i className="fa-solid fa-user me-2"></i>{" "}
                                    Personajes
                                </li>
                                <li>
                                    <i className="fa-solid fa-globe me-2"></i>{" "}
                                    Planetas
                                </li>
                                <li>
                                    <i className="fa-solid fa-car-side me-2"></i>{" "}
                                    Vehículos
                                </li>
                            </ul>
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Al hacer clic en una sugerencia, navega
                            automáticamente a la vista detallada del elemento.
                        </li>
                        <li>
                            <i className="fa-solid fa-check text-success me-2"></i>
                            Facilita la exploración sin navegar manualmente por
                            listas.
                        </li>
                        <li className="mt-2 fst-italic text-muted">
                            <i className="fa-solid fa-bolt me-2"></i>
                            Implementado con filtrado dinámico del{" "}
                            <strong>store</strong> y navegación mediante{" "}
                            <strong>React Router</strong>.
                        </li>
                    </ul>
                </li>
            </ul>

            <p className="mt-4 text-center">
                Este proyecto no solo demuestra el uso de React y APIs externas,
                sino también la capacidad de escalar una idea simple a múltiples
                fuentes de datos manteniendo una experiencia de usuario
                coherente.
            </p>
        </div>
    );
};
