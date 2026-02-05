import { useParams } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { NotFoundItem } from '../../components/NotFoundItem';

const pages = {
  pokemon: {
    title: 'Pokémon',
    storeKey: 'allPokemons',
    baseRoute: '/pokeapi/pokemon',
  },
  pokeball: {
    title: 'Pokéballs',
    storeKey: 'allPokeBalls',
    baseRoute: '/pokeapi/pokeball',
  },
  game: {
    title: 'Juegos',
    storeKey: 'allPokeGames',
    baseRoute: '/pokeapi/game',
  },
};

export const PokeApiCardGridPage = () => {
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
