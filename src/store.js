import { createContext } from 'react';

export const initialStore = () => {
  return {
    allSimpsonsCharacters: [],
    allSimpsonsEpisodes: [],
    allSimpsonsLocations: [],
    allPokemons: [],
    allPokeBalls: [],
    allPokeGames: [],
    allBobsBurgersCharacters: [],
    allBobsBurgersEndCreditsSequences: [],
    allBobsBurgersStores: [],
    allStarWarsPeople: [],
    allStarWarsPlanets: [],
    allStarWarsVehicles: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    // --- SIMPSONSAPI ---
    case 'set_allSimpsonsCharacters':
      return { ...store, allSimpsonsCharacters: action.payload };

    case 'set_allSimpsonsEpisodes':
      return { ...store, allSimpsonsEpisodes: action.payload };

    case 'set_allSimpsonsLocations':
      return { ...store, allSimpsonsLocations: action.payload };

    // --- POKEAPI ---
    case 'set_allPokemons':
      return { ...store, allPokemons: action.payload };

    case 'set_allPokeBalls':
      return { ...store, allPokeBalls: action.payload };

    case 'set_allPokeGames':
      return { ...store, allPokeGames: action.payload };

    // --- BOBSBURGERSAPI ---
    case 'set_allBobsBurgersCharacters':
      return { ...store, allBobsBurgersCharacters: action.payload };

    case 'set_allBobsBurgersEndCreditsSequences':
      return { ...store, allBobsBurgersEndCreditsSequences: action.payload };

    case 'set_allBobsBurgersStores':
      return { ...store, allBobsBurgersStores: action.payload };

      // --- STARWARSPAPI ---
    case 'set_allStarWarsPeople':
      return { ...store, allStarWarsPeople: action.payload };

    case 'set_allStarWarsPlanets':
      return { ...store, allStarWarsPlanets: action.payload };

    case 'set_allStarWarsVehicles':
      return { ...store, allStarWarsVehicles: action.payload };

    // --- FAVORITOS ---
    case 'add_favorite':
      if (store.favorites.find((f) => f.name === action.payload.name))
        return store; // Evita duplicados
      return { ...store, favorites: [...store.favorites, action.payload] };

    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(
          (f) => f.name !== action.payload.name,
        ),
      };

    default:
      throw Error('Unknown action.');
  }
}

export const Context = createContext(null);
