import { useParams } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { NotFoundItem } from '../../components/NotFoundItem';

const pages = {
  characters: {
    title: 'Personajes',
    storeKey: 'allBobsBurgersCharacters',
    baseRoute: '/bobsburgersapi/characters',
  },
  endCreditsSequences: {
    title: 'Secuencias de Créditos',
    storeKey: 'allBobsBurgersEndCreditsSequences',
    baseRoute: '/bobsburgersapi/endCreditsSequences',
  },
  storesNextDoor: {
    title: 'Tiendas de al lado',
    storeKey: 'allBobsBurgersStores',
    baseRoute: '/bobsburgersapi/storesNextDoor',
  },
};

export const BobsBurgersCardGridPage = () => {
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
