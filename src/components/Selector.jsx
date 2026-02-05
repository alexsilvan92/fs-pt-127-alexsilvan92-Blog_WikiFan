import { Link, useLocation } from 'react-router-dom';

export const Selector = () => {
  const { pathname } = useLocation();

  const pokeApiItems = [
    { to: '/pokeapi/pokemon', label: '🐾 Pokémon' },
    { to: '/pokeapi/pokeball', label: '⚾ Poké Balls' },
    { to: '/pokeapi/game', label: '🎮 Juegos' }
  ];

  const simpsonsItems = [
    { to: '/thesimpsonsapi/characters', label: '👤 Personajes' },
    { to: '/thesimpsonsapi/episodes', label: '📺 Episodios' },
    { to: '/thesimpsonsapi/locations', label: '📍 Ubicaciones' }
  ];

  const homeItems = [
    { to: '/', label: '🏡 Home' }
  ];

  const isPokeApiRoute = pathname.startsWith('/pokeapi');
  const isSimpsonsApiRoute = pathname.startsWith('/thesimpsonsapi');

  const items = isPokeApiRoute
    ? pokeApiItems
    : isSimpsonsApiRoute
    ? simpsonsItems
    : homeItems;

  return (
    <div className="col-12 col-md-4 mb-2 mb-lg-0">
      <div className="dropdown rounded">
        <button
          className="btn btn-outline-primary dropdown-toggle w-100 fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
        >
          📦 Categoría
          <span className="badge bg-primary ms-2">
            {items.length}
          </span>
        </button>

        <ul className="dropdown-menu category-dropdown col-12">
          {items.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="dropdown-item">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

