import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect, useState } from 'react';

import simpsonsApiServices from '../../services/theSimpsonsApiServices.js';
import { SimpsonPedia } from '../../components/SimpsonPedia.jsx';

export const TheSimpsonsApiPage = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchSimpsons = async () => {
      const characters = await simpsonsApiServices.getAllCharacters();
      const episodes = await simpsonsApiServices.getAllEpisodes();
      const locations = await simpsonsApiServices.getAllLocations();

      dispatch({ type: 'set_allSimpsonsCharacters', payload: characters });
      dispatch({ type: 'set_allSimpsonsEpisodes', payload: episodes });
      dispatch({ type: 'set_allSimpsonsLocations', payload: locations });
    };

    fetchSimpsons();
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

  return <SimpsonPedia />;
};
