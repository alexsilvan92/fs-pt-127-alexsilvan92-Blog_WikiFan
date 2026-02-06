import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';

import pokeApiServices from '../../services/pokeApiServices.js';
import { PokePedia } from '../../components/Pokepedia.jsx';
import { Loading } from '../../components/Loading';
import { NotFoundItem } from '../../components/NotFoundItem';

export const PokeApiPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokeApi = async () => {
      try {
        setLoading(true);
        setError(null);

        const [pokemons, pokeBalls, games] = await Promise.all([
          pokeApiServices.getAllPokemons(),
          pokeApiServices.getAllPokeBalls(),
          pokeApiServices.getAllPokeGames(),
        ]);

        dispatch({ type: 'set_allPokemons', payload: pokemons });
        dispatch({ type: 'set_allPokeBalls', payload: pokeBalls });
        dispatch({ type: 'set_allPokeGames', payload: games });
      } catch (err) {
        console.error('❌ Error cargando datos de Poke Api:', err);
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchPokeApi();
  }, []);

  if (loading) return <Loading message="Cargando datos de la Poke Api" />;
  if (error) return <NotFoundItem />;

  return <PokePedia />;
};
