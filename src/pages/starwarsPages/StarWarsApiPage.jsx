import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';

import starWarsApiServices from '../../services/starWarsApiServices.js';
import { StarWarsPedia } from '../../components/StarWarsPedia.jsx';
import { Loading } from '../../components/Loading';
import { NotFoundItem } from '../../components/NotFoundItem';

export const StarWarsApiPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStarWars = async () => {
      try {
        setLoading(true);
        setError(null);

        const [people, planets, vehicles] = await Promise.all([
          starWarsApiServices.getAllPeople(),
          starWarsApiServices.getAllPlanets(),
          starWarsApiServices.getAllVehicles(),
        ]);

        dispatch({ type: 'set_allStarWarsPeople', payload: people });
        dispatch({ type: 'set_allStarWarsPlanets', payload: planets });
        dispatch({ type: 'set_allStarWarsVehicles', payload: vehicles });
      } catch (err) {
        console.error('❌ Error cargando datos de Star Wars:', err);
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchStarWars();
  }, []);

  if (loading) return <Loading message="Cargando datos de la galaxia" />;
  if (error) return <NotFoundItem />;

  return <StarWarsPedia />;
};
