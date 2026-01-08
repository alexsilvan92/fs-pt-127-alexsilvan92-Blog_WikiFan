import { createContext } from "react";

export const initialStore = () => {
    return {
        allPokemonsNamesUrls: [],
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {

        case "set_allPokemonsNamesUrls":
            return {
                ...store, // Copiamos todo el estado actual
                allPokemonsNamesUrls: action.payload, // Reemplazamos allPokemonsNamesUrls con los nuevos datos
            };
        default:
            throw Error("Unknown action.");

    }
}

export const Context = createContext(null);