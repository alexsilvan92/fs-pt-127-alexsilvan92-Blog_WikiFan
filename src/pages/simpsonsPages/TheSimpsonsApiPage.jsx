import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';

import simpsonsApiServices from '../../services/theSimpsonsApiServices.js';
import { SimpsonPedia } from '../../components/SimpsonPedia.jsx';
import { Loading } from '../../components/Loading';
import { NotFoundItem } from '../../components/NotFoundItem';

export const TheSimpsonsApiPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSimpsons = async () => {
      try {
        setLoading(true);
        setError(null);

        const [characters, episodes, locations] = await Promise.all([
          simpsonsApiServices.getAllCharacters(),
          simpsonsApiServices.getAllEpisodes(),
          simpsonsApiServices.getAllLocations(),
        ]);

        dispatch({ type: 'set_allSimpsonsCharacters', payload: characters });
        dispatch({ type: 'set_allSimpsonsEpisodes', payload: episodes });
        dispatch({ type: 'set_allSimpsonsLocations', payload: locations });
      } catch (err) {
        console.error('❌ Error cargando datos de The Simpsons Api:', err);
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchSimpsons();
  }, []);

  if (loading) return <Loading message="Cargando datos de The Simpsons Api" />;
  if (error) return <NotFoundItem />;
  
  return <SimpsonPedia />;
};
