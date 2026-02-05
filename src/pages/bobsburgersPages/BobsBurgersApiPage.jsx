import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect } from 'react';

import bobsBurgersApiServices from '../../services/bobsBurgerApiServices';
import { BobsBurgersPedia } from '../../components/BobsBurgersPedia.jsx';

export const BobsBurgersApiPage = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchBobsBurgers = async () => {
      const characters = await bobsBurgersApiServices.getAllCharacters();
      const endCreditsSequences = await bobsBurgersApiServices.getAllEndCreditsSequences();
      const stores = await bobsBurgersApiServices.getAllStores();

      dispatch({ type: 'set_allBobsBurgersCharacters', payload: characters });
      dispatch({ type: 'set_allBobsBurgersEndCreditsSequences', payload: endCreditsSequences });
      dispatch({ type: 'set_allBobsBurgersStores', payload: stores });
    };

    fetchBobsBurgers();
  }, []);

  // ======================================
  // useEffect PARA DEBUGGER DE LA STORE
  // ======================================
  useEffect(() => {
    console.log('💾🌍 Store actualizado:', store);
  }, [store]);

  // ======================================
  // useEffect PARA DEBUGGER DE LOCALSTORAGE
  // ======================================
  useEffect(() => {
    const raw = localStorage.getItem('wikiStore');
    let parsed = null;
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = raw;
    }

    console.log('💾🧠 localStorage wikiStore:', parsed);
  }, [store.favorites]);

  return <BobsBurgersPedia />;
};