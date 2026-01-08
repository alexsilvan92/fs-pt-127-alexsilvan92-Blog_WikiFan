export const SelectorPokedex = () => (
    <div className="col-12 col-md-4 mb-3 mb-lg-0">
        <div className="dropdown p-2 p-md-4 rounded">
            <button
                className="btn btn-outline-primary dropdown-toggle w-100 fw-semibold"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                📦 Categoría: Pokémon
            </button>

            <ul className="dropdown-menu category-dropdown">
                <li>
                    <button className="dropdown-item">
                        🐾 Pokémon
                    </button>
                </li>
                <li>
                    <button className="dropdown-item">
                        ⚾ Poké Balls
                    </button>
                </li>
                <li>
                    <button className="dropdown-item">
                        🎮 Juegos
                    </button>
                </li>
            </ul>
        </div>
    </div>
);