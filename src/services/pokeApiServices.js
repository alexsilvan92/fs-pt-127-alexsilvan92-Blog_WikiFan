// ============================================
// SERVICIOS DE pokeApi
// ============================================

const BASE_URL = 'https://pokeapi.co/api/v2';

// ============================================================
// FUNCIÓN GET - Obtener todos los POKÉMON
// ============================================================
async function getAllPokemons() {
  const response = await fetch(`${BASE_URL}/pokemon?limit=2000&offset=0`);
  const data = await response.json();

  const pokemons = data.results.map((p) => {
    const id = p.url.split('/').filter(Boolean).pop();
    
    return {
      id,
      name: p.name,
      url: p.url,
      type: 'pokemon',
      api: 'pokeapi',
      image_path: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });

  return pokemons;
}

// ============================================================
// FUNCIÓN GET - Obtener todas las POKÉBALLS
// ============================================================
async function getBallsByCategory(categoryId) {
  const response = await fetch(`${BASE_URL}/item-category/${categoryId}/`);
  const data = await response.json();
  
  return data.items.map((b) => {
    const id = b.url.split('/').filter(Boolean).pop();
    
    return {
      id,
      name: b.name,
      url: b.url,
      type: 'pokeball',
      api: 'pokeapi',
      image_path: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${b.name}.png`,
    };
  });
}

async function getAllPokeBalls() {
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
async function getAllPokeGames() {
  const response = await fetch(`${BASE_URL}/version?offset=0&limit=2000`);
  const data = await response.json();

  const games = data.results.map((g) => {
    const id = g.url.split('/').filter(Boolean).pop();
    
    return {
      id,
      name: g.name,
      url: g.url,
      type: 'game',
      api: 'pokeapi',
    };
  });

  return games;
}

// ============================================================
// FUNCIÓN GET - Detalle de POKÉMON
// ============================================================
async function getPokemonById(id) {
  const res = await fetch(`${BASE_URL}/pokemon/${id}`);
  if (!res.ok) throw new Error('Pokemon not found');
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'pokemon',
    api: 'pokeapi',
    image_path: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    sprites: {
      front_default: data.sprites?.front_default || null,
      other: data.sprites?.other?.['official-artwork']?.front_default || null,
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
  const res = await fetch(`${BASE_URL}/item/${id}`);
  if (!res.ok) throw new Error('Pokeball not found');
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'pokeball',
    api: 'pokeapi',
    image_path: data.sprites?.default || null,
    sprites: {
      default: data.sprites?.default || null,
    },
    cost: data.cost,
    category: data.category?.name,
    effect: data.effect_entries?.find((e) => e.language.name === 'en')?.short_effect || null,
  };
}

// ============================================================
// FUNCIÓN GET - Detalle de JUEGO
// ============================================================
async function getGameById(id) {
  const res = await fetch(`${BASE_URL}/version/${id}`);
  if (!res.ok) throw new Error('Game not found');
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    type: 'game',
    api: 'pokeapi',
    generation: data.version_group?.name || null,
  };
}

// ============================================================
// OBJETO EXPORTADO CON TODOS LOS SERVICIOS
// ============================================================
const pokeApiServices = {
  getAllPokemons,
  getAllPokeBalls,
  getAllPokeGames,
  getPokemonById,
  getPokeBallById,
  getGameById,
};

export default pokeApiServices;