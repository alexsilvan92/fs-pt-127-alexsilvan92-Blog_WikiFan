// ====================
// SERVICIOS DE SIMPSONPEDIA
// ====================

// ============================================================
// FUNCIÓN GET - Obtener todos los PERSONAJES de la API
// ============================================================
async function getAllCharacters() {
  // 1️⃣ Obtenemos la primera página para saber el total de páginas
  const firstPageResponse = await fetch(
    `https://thesimpsonsapi.com/api/characters`,
  );
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.pages; // número total de páginas
  const characters = firstPageData.results.map((c) => ({
    id: c.id,
    name: c.name,
    type: 'characters',
    api: 'thesimpsonsapi',
    portrait_path: c.portrait_path || null,
  }));

  // 2️⃣ Creamos URLs de las demás páginas (desde la 2 hasta totalPages)
  const urls = [];
  for (let i = 2; i <= totalPages; i++) {
    urls.push(`https://thesimpsonsapi.com/api/characters?page=${i}`);
  }

  // 3️⃣ Hacemos fetch de todas las páginas en paralelo
  const pagesData = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json())),
  );

  // 4️⃣ Extraemos y transformamos los resultados
  pagesData.forEach((page) => {
    characters.push(
      ...page.results.map((c) => ({
        id: c.id,
        name: c.name,
        type: 'characters',
        api: 'thesimpsonsapi',
        portrait_path: c.portrait_path || null,
      })),
    );
  });

  // 5️⃣ Retornamos la lista completa de personajes
  return characters;
}

// ============================================================
// FUNCIÓN GET - Obtener todos los EPISODIOS de la API
// ============================================================
async function getAllEpisodes() {
  const firstPageResponse = await fetch(
    `https://thesimpsonsapi.com/api/episodes`,
  );
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.pages;
  const episodes = firstPageData.results.map((e) => ({
    id: e.id,
    name: e.name,
    type: 'episodes',
    api: 'thesimpsonsapi',
    portrait_path: e.image_path || null,
  }));

  const urls = [];
  for (let i = 2; i <= totalPages; i++) {
    urls.push(`https://thesimpsonsapi.com/api/episodes?page=${i}`);
  }

  const pagesData = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json())),
  );

  pagesData.forEach((page) => {
    episodes.push(
      ...page.results.map((e) => ({
        id: e.id,
        name: e.name,
        season: e.season,
        airdate: e.airdate,
        type: 'episodes',
        api: 'thesimpsonsapi',
        portrait_path: e.image_path || null,
      })),
    );
  });

  return episodes;
}

// ============================================================
// FUNCIÓN GET - Obtener todas las LOCACIONES de la API
// ============================================================
async function getAllLocations() {
  const firstPageResponse = await fetch(
    `https://thesimpsonsapi.com/api/locations`,
  );
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.pages;
  const locations = firstPageData.results.map((l) => ({
    id: l.id,
    name: l.name,
    type: 'locations',
    api: 'thesimpsonsapi',
    portrait_path: l.image_path || null,
  }));

  const urls = [];
  for (let i = 2; i <= totalPages; i++) {
    urls.push(`https://thesimpsonsapi.com/api/locations?page=${i}`);
  }

  const pagesData = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json())),
  );

  pagesData.forEach((page) => {
    locations.push(
      ...page.results.map((l) => ({
        id: l.id,
        name: l.name,
        type: 'locations',
        api: 'thesimpsonsapi',
        portrait_path: l.image_path || null,
      })),
    );
  });

  return locations;
}

// ============================================================
// FUNCIÓN GET - Detalle de PERSONAJE
// ============================================================
async function getCharacterById(id) {
  const res = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
  if (!res.ok) throw new Error('Character not found');
  const data = await res.json();
  // ⚠️ IMPORTANTE: Añadir el campo 'api' para que getItemImage funcione
  return { ...data, api: 'thesimpsonsapi' };
}

// ============================================================
// FUNCIÓN GET - Detalle de EPISODIO
// ============================================================
async function getEpisodeById(id) {
  const res = await fetch(`https://thesimpsonsapi.com/api/episodes/${id}`);
  if (!res.ok) throw new Error('Episode not found');
  const data = await res.json();
  // ⚠️ IMPORTANTE: Añadir el campo 'api' para que getItemImage funcione
  return { ...data, api: 'thesimpsonsapi' };
}

// ============================================================
// FUNCIÓN GET - Detalle de LOCALIZACIÓN
// ============================================================
async function getLocationById(id) {
  const res = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`);
  if (!res.ok) throw new Error('Location not found');
  const data = await res.json();
  // ⚠️ IMPORTANTE: Añadir el campo 'api' para que getItemImage funcione
  return { ...data, api: 'thesimpsonsapi' };
}

// ============================================================
// OBJETO EXPORTADO CON TODOS LOS SERVICIOS
// ============================================================
const simpsonsApiServices = {
  getAllCharacters,
  getAllEpisodes,
  getAllLocations,
  getCharacterById,
  getEpisodeById,
  getLocationById,
};

export default simpsonsApiServices;
