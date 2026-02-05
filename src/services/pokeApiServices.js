// ====================
// SERVICIOS DE POKEAPI
// ====================

// ============================================================
// FUNCIÓN GET - Obtener todos los POKEMONS (name y url)
// ============================================================
async function getAllPokemonsNamesUrls() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=2000&offset=0`,
  );
  const data = await response.json();

  return data.results.map((p) => ({
    name: p.name,
    url: p.url,
    type: 'pokemon',
    api: 'pokeapi',
  }));
}

// ============================================================
// FUNCIÓN GET - Obtener todas las POKEBALLS (standard, special, apricorn)
// ============================================================
async function getBallsByCategory(categoryId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/item-category/${categoryId}/?limit=2000&offset=0`,
  );
  const data = await response.json();
  return data.items.map((b) => ({
    name: b.name,
    url: b.url,
    type: 'pokeball',
    api: 'pokeapi',
  }));
}

async function getAllPokeBallsNamesUrls() {
  const [standardBalls, specialBalls, apricornBalls] = await Promise.all([
    getBallsByCategory(34), // Standard Balls
    getBallsByCategory(33), // Special Balls
    getBallsByCategory(39), // Apricorn Balls
  ]);

  return [...standardBalls, ...specialBalls, ...apricornBalls];
}

// ============================================================
// FUNCIÓN GET - Obtener todos los JUEGOS
// ============================================================
async function getAllPokeGamesNamesUrls() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/version/?offset=0&limit=2000`,
  );
  const data = await response.json();

  return data.results.map((g) => ({
    name: g.name,
    url: g.url,
    type: 'game',
    api: 'pokeapi',
  }));
}

// ============================================================
// FUNCIÓN GET - Obtener detalles filtrados de un listado de recursos
// ============================================================
async function getAllPokeApiDetails(list) {
  const promises = list.map(async (obj) => {
    const res = await fetch(obj.url);
    const data = await res.json();

    // Filtramos solo los campos necesarios según tipo
    let filtered = { api: obj.api, type: obj.type, id: data.id, url: obj.url };

    if (obj.type === 'pokemon') {
      filtered = {
        ...filtered,
        name: data.name,
        sprites: {
          front_default: data.sprites?.front_default || null,
        },
      };
    } else if (obj.type === 'pokeball') {
      filtered = {
        ...filtered,
        name: data.name,
        sprites: {
          default: data.sprites?.default || null,
        },
      };
    } else if (obj.type === 'game') {
      filtered = {
        ...filtered,
        name: data.name,
      };
    }

    return filtered;
  });

  const data = await Promise.all(promises);
  return data;
}

// ============================================================
// FUNCIÓN GET - Detalle de POKÉMON
// ============================================================
async function getPokemonById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error('Pokemon not found');

  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'pokemon',
    api: 'pokeapi',
    sprites: {
      front_default: data.sprites?.front_default || null,
      other:
        data.sprites?.other?.['official-artwork']?.front_default || null,
    },
    height: data.height,
    weight: data.weight,
    abilities: data.abilities?.map((a) => a.ability.name),
    types: data.types?.map((t) => t.type.name),
    stats: data.stats?.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  };
}

// ============================================================
// FUNCIÓN GET - Detalle de POKÉBALL
// ============================================================
async function getPokeBallById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
  if (!res.ok) throw new Error('Pokeball not found');

  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'pokeball',
    api: 'pokeapi',
    sprites: {
      default: data.sprites?.default || null,
    },
    cost: data.cost,
    category: data.category?.name,
    effect:
      data.effect_entries?.find((e) => e.language.name === 'en')
        ?.short_effect || null,
  };
}

// ============================================================
// FUNCIÓN GET - Detalle de JUEGO
// ============================================================
async function getGameById(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/version/${id}`);
  if (!res.ok) throw new Error('Game not found');

  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'game',
    api: 'pokeapi',
    generation: data.generation?.name || null,
  };
}

// ============================================================
// OBJETO EXPORTADO CON TODOS LOS SERVICIOS
// ============================================================
const pokeApiServices = {
  getAllPokemonsNamesUrls,
  getAllPokeBallsNamesUrls,
  getAllPokeGamesNamesUrls,
  getAllPokeApiDetails,
  getPokemonById,
  getPokeBallById,
  getGameById,
};

export default pokeApiServices;
