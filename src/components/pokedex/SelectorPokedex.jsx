import { Link, } from "react-router-dom";


export const SelectorPokedex = () => (
  <div className="col-12 col-md-4 mb-2 mb-lg-0">
    <div className="dropdown rounded">
      <button
        className="btn btn-outline-primary dropdown-toggle w-100 fw-semibold"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        📦 Categoría
        <span className="badge bg-primary ms-2">003</span>
      </button>

      <ul className="dropdown-menu category-dropdown col-12">
        <li>
          <Link to="/pokeapi/pokemon">
            <button className="dropdown-item">🐾 Pokémon</button>
          </Link>
        </li>
        <li>
          <Link to="/pokeapi/pokeball">
            <button className="dropdown-item">⚾ Poké Balls</button>
          </Link>
        </li>
        <li>
          <Link to="/pokeapi/pokegame">
            <button className="dropdown-item">🎮 Juegos</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
