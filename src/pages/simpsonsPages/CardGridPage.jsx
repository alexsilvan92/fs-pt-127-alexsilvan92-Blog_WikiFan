import { useParams } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { NotFoundItem } from '../../components/NotFoundItem';

const pages = {
  characters: {
    title: 'Personajes',
    storeKey: 'allSimpsonsCharacters',
    baseRoute: '/thesimpsonsapi/characters',
  },
  episodes: {
    title: 'Episodios',
    storeKey: 'allSimpsonsEpisodes',
    baseRoute: '/thesimpsonsapi/episodes',
  },
  locations: {
    title: 'Localizaciones',
    storeKey: 'allSimpsonsLocations',
    baseRoute: '/thesimpsonsapi/locations',
  },
};

export const SimpsonsCardGridPage = () => {
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
