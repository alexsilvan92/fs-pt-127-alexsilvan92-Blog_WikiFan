import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { CardDetailPokedex } from './CardDetailPokedex';
import { GridPokedex } from './GridPokedex';
import { SeekerPokedex } from './SeekerPokedex';
import { FavoritesPokedex } from './FavoritesPokedex';
import { SelectorPokedex } from './SelectorPokedex';

export const Pokedex = () => {
  const { store, dispatch } = useGlobalReducer();
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();

  const type = location.pathname.includes('/pokemon')
    ? 'pokemon'
    : location.pathname.includes('/pokeball')
      ? 'pokeball'
      : 'game';

  // FUNCIÓN: Renderizado Condicional Del Grid (según la ruta actual)
  const renderGridPokedex = () => {
    const path = location.pathname;

    // ========================================
    // PÁGINA: DETALLE (/pokeapi/:name)
    // ========================================
 if (name) {
  const source =
    type === 'pokemon'
      ? store.allPokemonsDetails
      : type === 'pokeball'
      ? store.allPokeBallsDetails
      : store.allPokeGamesDetails;

  const item = source.find(i => i.name === name);
  if (item) return <CardDetailPokedex type={type} item={item} />;
}
    // ========================================
    // PÁGINA: POKEMON (/pokeapi/pokemon)
    // ========================================
    if (path === '/pokeapi/pokemon') {
      return <GridPokedex view={store.allPokemonsDetails} type="pokemon"/>;
    }
    // ========================================
    // PÁGINA: POKEBALL (/pokeapi/pokeball)
    // ========================================
    if (path === '/pokeapi/pokeball') {
      return <GridPokedex view={store.allPokeBallsDetails} type="pokeball"/>;
    }
    // ========================================
    // PÁGINA: POKEGAME (/pokeapi/pokegame)
    // ========================================
    if (path === '/pokeapi/pokegame') {
      return <GridPokedex view={store.allPokeGamesDetails} type="pokegame"/>;
    }
  };

  return (
    <div>
      <div className="navbar-light bg-light container-fluid pb-2 mb-2">
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
