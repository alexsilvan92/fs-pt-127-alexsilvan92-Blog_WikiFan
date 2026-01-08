// ===================
// SERVICIOS DE POKEAPI
// ===================

//FUNCIÓN GET - Obtener toda la lista de Pokemons name y url
async function getAllPokemonsNamesUrls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0`,
        { method: "GET" }
    );

    // Convertimos la respuesta del servidor de JSON a objeto JavaScript
    const data = await response.json();

    // RETURN NECESARIO: Devolvemos los datos para poder usarlos donde llamemos esta función
    return data;
}

//FUNCIÓN GET - Obtener detalles de un Pokemon por su nombre o id
async function getPokemonDetails(nameOrId) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}`,
        { method: "GET" }
    );

    const data = await response.json();
    return data;
}

const pokeApiServices = {
    getAllPokemonsNamesUrls,
    getPokemonDetails,
};

export default pokeApiServices;
