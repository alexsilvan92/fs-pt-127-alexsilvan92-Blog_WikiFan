import { useParams } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { NotFoundItem } from '../../components/NotFoundItem';

const pages = {
  people: {
    title: 'Personajes',
    storeKey: 'allStarWarsPeople',
    baseRoute: '/starwarsapi/people',
  },
  planets: {
    title: 'Planetas',
    storeKey: 'allStarWarsPlanets',
    baseRoute: '/starwarsapi/planets',
  },
  vehicles: {
    title: 'Vehículos',
    storeKey: 'allStarWarsVehicles',
    baseRoute: '/starwarsapi/vehicles',
  },
};

export const StarWarsCardGridPage = () => {
  const { type } = useParams();
  const { store } = useGlobalReducer();

  const resource = pages[type];

  if (!resource) {
    return <NotFoundItem />;
  }

  return (
    <>
      <h2 className="text-center mt-4">{resource.title}</h2>

      <CardGrid
        items={store[resource.storeKey]}
        baseRoute={resource.baseRoute}
      />
    </>
  );
};