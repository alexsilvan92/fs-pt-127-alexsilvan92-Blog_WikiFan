import { Link } from "react-router-dom";

export const FavoritesPokedex = () => (
    <div className="col-12 col-md-4 mt-4 mt-md-0">
        <div className="dropdown p-2 p-md-4 rounded">
            <button
                className="btn btn-outline-danger dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                ❤️ Favoritos
                <span className="badge bg-danger ms-2">001</span>
            </button>

            <ul className="dropdown-menu category-dropdown">
                <li className="dropdown-item text-muted text-center">
                    No tienes favoritos aún
                </li>

                <li className="dropdown-item d-flex align-items-center justify-content-between">
                    <Link
                        to="/pokeapi/1"
                        className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                    >
                        <img
                            src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png"
                            alt="Bulbasaur"
                            className="favorite-img"
                        />
                        <span className="text-capitalize">Bulbasaur</span>
                    </Link>
                    <button
                        className="btn btn-outline-danger btn-sm ms-2"
                        aria-label="Eliminar favorito"
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </li>

            </ul>
        </div>
    </div>
);
