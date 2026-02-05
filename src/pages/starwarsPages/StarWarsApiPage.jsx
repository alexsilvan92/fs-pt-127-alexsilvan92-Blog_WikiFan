import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect } from 'react';

import starWarsApiServices from '../../services/starWarsApiServices.js';
import { StarWarsPedia } from '../../components/StarWarsPedia.jsx';

export const StarWarsApiPage = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchStarWars = async () => {
      const people = await starWarsApiServices.getAllPeople();
      const planets = await starWarsApiServices.getAllPlanets();
      const vehicles = await starWarsApiServices.getAllVehicles();

      dispatch({ type: 'set_allStarWarsPeople', payload: people });
      dispatch({ type: 'set_allStarWarsPlanets', payload: planets });
      dispatch({ type: 'set_allStarWarsVehicles', payload: vehicles });
    };

    fetchStarWars();
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

  return <StarWarsPedia />;
};