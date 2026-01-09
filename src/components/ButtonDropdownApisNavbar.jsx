// =================================
// DROPDOWN SELECCIÓN DE WIKI (APIS)
// =================================
import logo_theSimpsonsApi from "../assets/img/logo_theSimpsonsApi.webp";
import logo_pokeApi from "../assets/img/logo_pokeApi.png";
import logo_bobsBurguerApi from "../assets/img/logo_bobsBurguerApi.ico";
import logo_theStarWarsApi from "../assets/img/logo_theStarWarsApi.png";
import logo_FanWiki from "../assets/img/logo_FanWiki.ico";
import { Link } from "react-router-dom";

export const ButtonDropdownApisNavbar = () => (
    <div className="col-12 col-md-4 mb-2 mb-lg-0">
        <div className="dropdown rounded">
            <button
                className="btn btn-outline-success dropdown-toggle w-100 fw-semibold"
                type="button" data-bs-toggle="dropdown" aria-expanded="false"
            >
                Selecciona una WIKI
            </button>

            <ul className="dropdown-menu col-12">
                <li>
                    <Link
                        to="/thesimpsonsapi"
                        className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <img
                            src={logo_theSimpsonsApi}
                            alt="The Simpsons API"
                            style={{
                                height: "40px",
                                width: "auto",
                            }}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/pokeapi/pokemon"
                        className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <img
                            src={logo_pokeApi}
                            alt="Poke API"
                            style={{
                                height: "40px",
                                width: "auto",
                            }}
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/bobsburguerapi"
                        className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <img
                            src={logo_bobsBurguerApi}
                            alt="Bob's Burguer Api"
                            style={{
                                height: "40px",
                                width: "auto",
                            }}
                        />
                        <span className="text-dark fw-bold">
                            {" "}
                            Bob's Burguer Api
                        </span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/thestarwarsapi"
                        className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <img
                            src={logo_theStarWarsApi}
                            alt="The Star Wars Api"
                            style={{
                                height: "40px",
                                width: "auto",
                            }}
                        />{" "}
                        <span className="text-dark fw-bold">Api</span>
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    {" "}
                    <Link
                        to="/"
                        className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                    >
                        <img
                            src={logo_FanWiki}
                            alt="Fan Wiki"
                            style={{
                                height: "40px",
                                width: "auto",
                            }}
                        />
                        <h1 className="navbar-brand d-flex align-items-center mb-0 fs-2 fw-bold text-dark">
                            <span className="fw-bold">
                                <span className="text-danger">Fan</span>{" "}
                                <span className="text-primary">Wiki</span>
                            </span>
                        </h1>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);
