import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { GridPokedex } from './GridPokedex';
import { SeekerPokedex } from './SeekerPokedex';
import { FavoritesPokedex } from './FavoritesPokedex';
import { SelectorPokedex } from './SelectorPokedex';

export const Pokedex = () => {
  const { store, dispatch } = useGlobalReducer();
  const location = useLocation();
  const navigate = useNavigate();

  // FUNCIÓN: Renderizado Condicional Del Grid (según la ruta actual)
  const renderGridPokedex = () => {
    const path = location.pathname;

    // ========================================
    // PÁGINA: POKEMON (/pokeapi/pokemon)
    // ========================================
    if (path === '/pokeapi/pokemon') {
      return <GridPokedex view={store.allPokemonsDetails}/>;
    }
    // ========================================
    // PÁGINA: POKEBALL (/pokeapi/pokeball)
    // ========================================
    if (path === '/pokeapi/pokeball') {
      return <GridPokedex view={store.allPokeBallsDetails}/>;
    }
    // ========================================
    // PÁGINA: POKEGAME (/pokeapi/pokegame)
    // ========================================
    if (path === '/pokeapi/pokegame') {
      return <GridPokedex  view={store.allPokeGamesDetails}/>;
    }
  };

  return (
    <div>
      <div className="bg-tertiary container-fluid py-4">
        <div className="row align-items-start">
          {/* SELECTOR */}
          <SelectorPokedex />

          {/* BUSCADOR */}
          <SeekerPokedex />

          {/* FAVORITOS */}
          <FavoritesPokedex />
        </div>
      </div>

      {renderGridPokedex()}
    </div>
  );
};
