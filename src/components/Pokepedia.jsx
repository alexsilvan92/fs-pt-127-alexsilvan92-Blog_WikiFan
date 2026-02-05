import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const PokePedia = () => {
  const { store } = useGlobalReducer();

  const cards = [
    {
      title: 'Pokémon',
      icon: '🐉',
      count: store.allPokemons?.length || 0,
      route: '/pokeapi/pokemon',
      text: 'Criaturas del mundo Pokémon',
    },
    {
      title: 'Pokéballs',
      icon: '🔴',
      count: store.allPokeBalls?.length || 0,
      route: '/pokeapi/pokeball',
      text: 'Herramientas de captura',
    },
    {
      title: 'Juegos',
      icon: '🎮',
      count: store.allPokeGames?.length || 0,
      route: '/pokeapi/game',
      text: 'Versiones oficiales',
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-12 col-md-4" key={card.title}>
            <div className="card h-100 text-center shadow-sm transition">
              <div className="card-body d-flex flex-column justify-content-center">
                <h1>{card.icon}</h1>
                <h3 className="fw-bold">{card.title}</h3>
                <p className="text-muted">{card.text}</p>
                <span className="badge bg-dark mb-3">
                  {card.count} {card.title.toLowerCase()}
                </span>
                <Link to={card.route} className="btn btn-danger fw-bold">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

