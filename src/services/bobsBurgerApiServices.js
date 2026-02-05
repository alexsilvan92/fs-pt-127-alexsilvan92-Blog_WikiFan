// ============================================
// SERVICIOS DE bobsBurgerApi
// ============================================

const BASE_URL = 'https://bobsburgers-api.herokuapp.com';

// ============================================================
// FUNCIÓN GET - Obtener todos los PERSONAJES
// ============================================================
async function getAllCharacters() {
  const response = await fetch(`${BASE_URL}/characters`);
  const data = await response.json();

  return data.map((c) => ({
    id: c.id,
    name: c.name,
    type: 'characters',
    api: 'bobsburgersapi',
    image: c.image || null,
  }));
}

// ============================================================
// FUNCIÓN GET - Obtener todas las SECUENCIAS DE CRÉDITOS
// ============================================================
async function getAllEndCreditsSequences() {
  const response = await fetch(`${BASE_URL}/endCreditsSequence`);
  const data = await response.json();

  return data.map((e) => ({
    id: e.id,
    name: `Season: ${e.season} - Episode: ${e.episode}`,
    season: e.season,
    episode: e.episode,
    type: 'endCreditsSequences',
    api: 'bobsburgersapi',
    image: e.image || null,
  }));
}

// ============================================================
// FUNCIÓN GET - Obtener todos los RESTAURANTES / TIENDAS
// ============================================================
async function getAllStores() {
  const response = await fetch(`${BASE_URL}/storeNextDoor`);
  const data = await response.json();

  return data.map((s) => ({
    id: s.id,
    name: s.name,
    type: 'storesNextDoor',
    api: 'bobsburgersapi',
    image: s.image || null,
  }));
}

// ============================================================
// FUNCIÓN GET - Detalle de PERSONAJE
// ============================================================
async function getCharacterById(id) {
  const res = await fetch(`${BASE_URL}/characters/${id}`);
  if (!res.ok) throw new Error('Character not found');
  const data = await res.json();

  return { ...data, api: 'bobsburgersapi', type: 'characters' };
}

// ============================================================
// FUNCIÓN GET - Detalle de SECUENCIA DE CRÉDITOS
// ============================================================
async function getEndCreditsSequenceById(id) {
  const res = await fetch(`${BASE_URL}/endCreditsSequence/${id}`);
  if (!res.ok) throw new Error('End credits sequence not found');
  const data = await res.json();

  return { ...data, api: 'bobsburgersapi', type: 'endCreditsSequences' };
}

// ============================================================
// FUNCIÓN GET - Detalle de TIENDA
// ============================================================
async function getStoreById(id) {
  const res = await fetch(`${BASE_URL}/storeNextDoor/${id}`);
  if (!res.ok) throw new Error('Store not found');
  const data = await res.json();

  return { ...data, api: 'bobsburgersapi', type: 'storesNextDoor' };
}

// ============================================================
// OBJETO EXPORTADO CON TODOS LOS SERVICIOS
// ============================================================
const bobsBurgersApiServices = {
  getAllCharacters,
  getAllEndCreditsSequences,
  getAllStores,
  getCharacterById,
  getEndCreditsSequenceById,
  getStoreById,
};

export default bobsBurgersApiServices;
