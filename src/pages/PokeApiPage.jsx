import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import pokeApiServices from "../services/pokeApiServices.js";
import { Pokedex } from "../components/pokedex/Pokedex.jsx";

export const PokeApi = () => {
    const { store, dispatch } = useGlobalReducer();

    // useEffect PARA CARGAR TODOS LOS DETALLES QUE NECESITO DE LA POKEAPI EN LA STORE
    useEffect(() => {

        //Funcción para cargar todos los detalles de los POKEMONS en la store
        const loadPokemons = async () => {
            // 1️⃣ Names + URLs
            const allPokemonsNamesUrls =
                await pokeApiServices.getAllPokemonsNamesUrls();

            // 2️⃣ Details (usando los names+urls)
            const allPokemonsDetails =
                await pokeApiServices.getAllPokeApiDetails(
                    allPokemonsNamesUrls
                );

            dispatch({
                type: "set_allPokemonsDetails",
                payload: allPokemonsDetails,
            });
        };

        //Funcción para cargar todos los detalles de las POKEBALLS en la store
        const loadPokeBalls = async () => {
            // 1️⃣ Names + URLs
            const allPokeBallsNamesUrls =
                await pokeApiServices.getAllPokeBallsNamesUrls();
            // 2️⃣ Details (usando los names+urls)
            const allPokeBallsDetails =
                await pokeApiServices.getAllPokeApiDetails(
                    allPokeBallsNamesUrls
                );

            dispatch({
                type: "set_allPokeBallsDetails",
                payload: allPokeBallsDetails,
            });
        };

        //Funcción para cargar todos los detalles de las POKEBALLS en la store
        const loadPokeGames = async () => {
            // 1️⃣ Names + URLs
            const allPokeGamesNamesUrls =
                await pokeApiServices.getAllPokeGamesNamesUrls();
            // 2️⃣ Details (usando los names+urls)
            const allPokeGamesDetails =
                await pokeApiServices.getAllPokeApiDetails(
                    allPokeGamesNamesUrls
                );

            dispatch({
                type: "set_allPokeGamesDetails",
                payload: allPokeGamesDetails,
            });
        };
        
        loadPokemons();
        loadPokeBalls();
        loadPokeGames();
    }, []);

    // useEffect PARA DEBUGGER DE LA STORE
    useEffect(() => {
        console.log("✅🌍 Store actualizado:", store);
    }, [store]);

    return <Pokedex />;
};
