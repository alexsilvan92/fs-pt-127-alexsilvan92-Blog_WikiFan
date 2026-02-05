import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const StarWarsPedia = () => {
  const { store } = useGlobalReducer();

  const cards = [
    {
      title: 'Personajes',
      icon: '👩‍👩‍👦‍👦',
      count: store.allStarWarsPeople?.length || 0,
      route: '/starwarsapi/people',
      text: 'Héroes y villanos',
    },
    {
      title: 'Planetas',
      icon: '🪐',
      count: store.allStarWarsPlanets?.length || 0,
      route: '/starwarsapi/planets',
      text: 'Mundos de la galaxia',
    },
    {
      title: 'Vehículos',
      icon: '🚀',
      count: store.allStarWarsVehicles?.length || 0,
      route: '/starwarsapi/vehicles',
      text: 'Naves y transportes',
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
                <Link to={card.route} className="btn btn-warning fw-bold">
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