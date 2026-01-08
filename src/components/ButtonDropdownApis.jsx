// ========================
// DROPDOWN APIS UTILIZADAS
// ========================
import logo_theSimpsonsApi from "../assets/img/logo_theSimpsonsApi.webp";
import logo_pokeApi from "../assets/img/logo_pokeApi.png";
import logo_bobsBurguerApi from "../assets/img/logo_bobsBurguerApi.ico";
import logo_theStarWarsApi from "../assets/img/logo_theStarWarsApi.png";

export const ButtonDropdownApis = () => (
    <div className="dropdown text-center my-4">
        <button
            className="btn btn-info dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            APIs utilizadas
        </button>

        <ul className="dropdown-menu text-center">
            <li className="dropdown-item d-flex justify-content-center align-items-center gap-2">
                <a
                    className="text-decoration-none text-dark fw-bold"
                    target="_blank"
                    href="https://thesimpsonsapi.com/"
                >
                    <img
                        src={logo_theSimpsonsApi}
                        alt="The Simpsons API"
                        style={{ height: "40px" }}
                    />
                </a>
                <span>·</span>
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://github.com/Facug03"
                >
                    <i className="fa-brands fa-github"></i> FacuG03
                </a>
            </li>

            <li className="dropdown-item d-flex justify-content-center align-items-center gap-2">
                <a
                    className="text-decoration-none text-dark fw-bold"
                    href="https://pokeapi.co/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={logo_pokeApi}
                        alt="Poke API"
                        style={{ height: "40px" }}
                    />
                </a>
                <span>·</span>
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://github.com/pokeapi"
                >
                    <i className="fa-brands fa-github"></i> PokeAPI Team
                </a>
            </li>

            <li className="dropdown-item d-flex justify-content-center align-items-center gap-2">
                <a
                    className="text-decoration-none text-dark fw-bold"
                    href="https://www.bobsburgersapi.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={logo_bobsBurguerApi}
                        alt="Bob's Burgers API"
                        style={{ height: "50px" }}
                    />
                    <span> Bob's Burgers API</span>
                </a>
                <span>·</span>
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://github.com/zachspiel"
                >
                    <i className="fa-brands fa-github"></i> Zachary Spielberger
                </a>
            </li>

            <li className="dropdown-item d-flex justify-content-center align-items-center gap-2">
                <a
                    className="text-decoration-none text-dark fw-bold"
                    href="https://www.swapi.tech/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={logo_theStarWarsApi}
                        alt="Star Wars API"
                        style={{ height: "35px" }}
                    />
                    <span> Api</span>
                </a>
                <span>·</span>
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://github.com/phalt"
                >
                    <i className="fa-brands fa-github"></i> Paul Hallet
                </a>
            </li>
        </ul>
    </div>
);
