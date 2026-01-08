import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import pokeApiServices from "../services/pokeApiServices.js";
import { Pokedex } from "../components/Pokedex.jsx";

export const PokeApi = () => {
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        // Función asíncrona para cargar todos los pokemons con sus
        const loadAllPokemonsNamesUrls = async () => {
            // Obtenemos todos los contactos de la API
            const allPokemonsNamesUrls =
                await pokeApiServices.getAllPokemonsNamesUrls();
            // Guardamos los contactos en el store
            dispatch({
                type: "set_allPokemonsNamesUrls",
                payload: allPokemonsNamesUrls.results,
            });
        };
        // Ejecutamos la función
        loadAllPokemonsNamesUrls();
    }, []); // Array vacío = solo se ejecuta una vez al montar el componente

    useEffect(() => {
        console.log("🌍 Store actualizado:", store.allPokemonsNamesUrls);
    }, [store.allPokemonsNamesUrls]);

    return <Pokedex />;
};
