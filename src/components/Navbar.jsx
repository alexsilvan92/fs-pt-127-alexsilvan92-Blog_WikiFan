import { Link } from "react-router-dom";

import logo_FanWiki from "../assets/img/logo_FanWiki.ico";
import logo_theSimpsonsApi from "../assets/img/logo_theSimpsonsApi.webp";
import logo_pokeApi from "../assets/img/logo_pokeApi.png";
import logo_bobsBurguerApi from "../assets/img/logo_bobsBurguerApi.ico";
import logo_theStarWarsApi from "../assets/img/logo_theStarWarsApi.png";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="text-decoration-none">
                    <div className="d-flex align-items-center gap-2">
                        <img
                            src={logo_FanWiki}
                            alt="Logo Fan Wiki"
                            style={{
                                height: "90px",
                                width: "auto",
                            }}
                        />
                        <h1 className="nnavbar-brand d-flex align-items-center mb-0 fs-2 fw-bold text-dark">
                            <span className="fw-bold">
                                <span className="text-danger">Fan</span>{" "}
                                <span className="text-primary">Wiki</span>
                            </span>
                        </h1>
                    </div>
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <a
                            className="btn btn-lg btn-success dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Selecciona una WIKI (API)
                        </a>

                        <ul className="dropdown-menu">
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
                                    to="/pokeapi"
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
                                    />{" "}
                                    Bob's Burguer Api
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
                                    Api
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                {" "}
                                <Link
                                    to="/demo"
                                    className="dropdown-item d-flex align-items-center justify-content-center text-decoration-none"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
