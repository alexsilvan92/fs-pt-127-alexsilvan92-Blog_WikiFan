import useGlobalReducer from '../../hooks/useGlobalReducer.jsx';
import { useEffect } from 'react';

import pokeApiServices from '../../services/pokeApiServices.js';
import { PokePedia } from '../../components/Pokepedia.jsx';

export const PokeApiPage = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchPokeApi = async () => {
      // 1️⃣ Pokémon (lista ligera)
      const pokemonsList = await pokeApiServices.getAllPokemonsNamesUrls();

      const pokemons = await pokeApiServices.getAllPokeApiDetails(
        pokemonsList.map((p) => ({
          ...p,
          type: 'pokemon',
          api: 'pokeapi',
        })),
      );

      // 2️⃣ Pokéballs
      const pokeBallsList =
        await pokeApiServices.getAllPokeBallsNamesUrls();

      const pokeBalls = await pokeApiServices.getAllPokeApiDetails(
        pokeBallsList.map((b) => ({
          ...b,
          type: 'pokeball',
          api: 'pokeapi',
        })),
      );

      // 3️⃣ Juegos
      const gamesList = await pokeApiServices.getAllPokeGamesNamesUrls();

      const games = await pokeApiServices.getAllPokeApiDetails(
        gamesList.map((g) => ({
          ...g,
          type: 'game',
          api: 'pokeapi',
        })),
      );

      dispatch({ type: 'set_allPokemons', payload: pokemons });
      dispatch({ type: 'set_allPokeBalls', payload: pokeBalls });
      dispatch({ type: 'set_allPokeGames', payload: games });
    };

    fetchPokeApi();
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

  return <PokePedia />;
};
