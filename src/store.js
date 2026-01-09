import { createContext } from "react";

export const initialStore = () => {
    return {
        allPokemonsDetails: [],
        allPokeBallsDetails: [],
        allPokeGamesDetails: [],
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case "set_allPokemonsDetails":
            return {
                ...store, // Copiamos todo el estado actual
                allPokemonsDetails: action.payload, // Reemplazamos allPokemonsDetails con los nuevos datos
            };

        case "set_allPokeBallsDetails":
            return {
                ...store,
                allPokeBallsDetails: action.payload,
            };

        case "set_allPokeGamesDetails":
            return {
                ...store,
                allPokeGamesDetails: action.payload,
            };

        default:
            throw Error("Unknown action.");
    }
}

export const Context = createContext(null);
