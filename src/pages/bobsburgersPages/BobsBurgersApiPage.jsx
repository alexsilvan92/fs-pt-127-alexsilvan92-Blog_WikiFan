import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';

import bobsBurgersApiServices from '../../services/bobsBurgerApiServices';
import { BobsBurgersPedia } from '../../components/BobsBurgersPedia.jsx';
import { Loading } from '../../components/Loading';
import { NotFoundItem } from '../../components/NotFoundItem';

export const BobsBurgersApiPage = () => {
  const { store, dispatch } = useGlobalReducer();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBobsBurgers = async () => {
      try {
        setLoading(true);
        setError(null);

        const [characters, endCreditsSequences, stores] = await Promise.all([
          bobsBurgersApiServices.getAllCharacters(),
          bobsBurgersApiServices.getAllEndCreditsSequences(),
          bobsBurgersApiServices.getAllStores(),
        ]);

        dispatch({ type: 'set_allBobsBurgersCharacters', payload: characters });
        dispatch({
          type: 'set_allBobsBurgersEndCreditsSequences',
          payload: endCreditsSequences,
        });
        dispatch({ type: 'set_allBobsBurgersStores', payload: stores });
      } catch (err) {
        console.error('❌ Error cargando datos de Bobs Burgers Api:', err);
        setError(err.message || 'Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    fetchBobsBurgers();
  }, []);

  if (loading) return <Loading message="Cargando datos de la Bobs Burgers Api" />;
  if (error) return <NotFoundItem />;

  return <BobsBurgersPedia />;
};
