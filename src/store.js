import { createContext } from 'react';

export const initialStore = () => {
  return {
    allPokemonsDetails: [],
    allPokeBallsDetails: [],
    allPokeGamesDetails: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_allPokemonsDetails':
      return {
        ...store, // Copiamos todo el estado actual
        allPokemonsDetails: action.payload, // Reemplazamos allPokemonsDetails con los nuevos datos
      };

    case 'set_allPokeBallsDetails':
      return {
        ...store,
        allPokeBallsDetails: action.payload,
      };

    case 'set_allPokeGamesDetails':
      return {
        ...store,
        allPokeGamesDetails: action.payload,
      };

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
