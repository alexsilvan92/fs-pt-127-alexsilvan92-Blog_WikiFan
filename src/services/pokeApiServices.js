// ====================
// SERVICIOS DE POKEAPI
// ====================

//FUNCIÓN GET - Obtener toda la lista de POKEMONS (name y url)
async function getAllPokemonsNamesUrls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0`,
        { method: "GET" }
    );

    // Convertimos la respuesta del servidor de JSON a objeto JavaScript
    const data = await response.json();

    // RETURN NECESARIO: Devolvemos los datos para poder usarlos donde llamemos esta función
    return data.results;
}

//FUNCIONES GET - Obtener toda la lista de POKEBALLS (name y url) (items concretos de categorías diferentes)
async function getStandardBalls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/item-category/34/?limit=2000&offset=0`,
        { method: "GET" }
    );

    const data = await response.json();
    return data;
}

async function getSpecialBalls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/item-category/33/?limit=2000&offset=0`,
        { method: "GET" }
    );

    const data = await response.json();
    return data;
}

async function getApricornBalls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/item-category/39/?limit=2000&offset=0`,
        { method: "GET" }
    );

    const data = await response.json();
    return data;
}
const getAllPokeBallsNamesUrls = async () => {
    const standardBallsData = await getStandardBalls();
    const specialBallsData = await getSpecialBalls();
    const apricornBallsData = await getApricornBalls();
    const data = [
        ...standardBallsData.items,
        ...specialBallsData.items,
        ...apricornBallsData.items,
    ];
    return data;
};

//FUNCIÓN GET - Obtener toda la lista de JUEGOS (name y url)
async function getAllPokeGamesNamesUrls() {
    const response = await fetch(
        `https://pokeapi.co/api/v2/version/?offset=0&limit=2000`,
        { method: "GET" }
    );

    const data = await response.json();

    return data.results;
}

//FUNCIÓN GET (con Promise.all) - Obtener detalles todos los POKEMON, las POKEBALLS y los JUEGOS por su URL
async function getAllPokeApiDetails(list) {
    const promises = list.map(async (object) => {
        const response = await fetch(object.url);
        const data = await response.json();
        return data;
    });
    const data = await Promise.all(promises);

    return data;
}

const pokeApiServices = {
    getAllPokemonsNamesUrls,
    getAllPokeBallsNamesUrls,
    getAllPokeGamesNamesUrls,
    getAllPokeApiDetails,
};

export default pokeApiServices;
