import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const BobsBurgersPedia = () => {
  const { store } = useGlobalReducer();

  const cards = [
    {
      title: 'Personajes',
      icon: '👨‍👩‍👧‍👦',
      count: store.allBobsBurgersCharacters?.length || 0,
      route: '/bobsburgersapi/characters',
      text: 'Familia Belcher y compañía',
    },
    {
      title: 'Secuencias de créditos finales',
      icon: '📺',
      count: store.allBobsBurgersEndCreditsSequences?.length || 0,
      route: '/bobsburgersapi/endCreditsSequences',
      text: 'Todas las secuencias de créditos finales.',
    },
    {
      title: 'Tiendas de al lado',
      icon: '🏪',
      count: store.allBobsBurgersStores?.length || 0,
      route: '/bobsburgersapi/storesNextDoor',
      text: 'Negocios del barrio',
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
