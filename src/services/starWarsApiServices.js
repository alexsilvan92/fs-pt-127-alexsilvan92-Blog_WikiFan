// ============================================
// SERVICIOS DE starWarsApi
// ============================================

const BASE_URL = 'https://www.swapi.tech/api';
const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img';

// ============================================================
// FUNCIÓN GET - Obtener todos los PERSONAJES
// ============================================================
async function getAllPeople() {
  const firstPageResponse = await fetch(`${BASE_URL}/people?page=1&limit=10`);
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.total_pages;

  const people = firstPageData.results.map((p) => ({
    id: p.uid,
    name: p.name,
    type: 'people',
    api: 'starwarsapi',
    image_path: `${IMAGE_BASE_URL}/characters/${p.uid}.jpg`,
  }));

  if (totalPages > 1) {
    const urls = [];
    for (let i = 2; i <= totalPages; i++) {
      urls.push(`${BASE_URL}/people?page=${i}&limit=10`);
    }

    const pagesData = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    pagesData.forEach((page) => {
      people.push(
        ...page.results.map((p) => ({
          id: p.uid,
          name: p.name,
          type: 'people',
          api: 'starwarsapi',
          image_path: `${IMAGE_BASE_URL}/characters/${p.uid}.jpg`,
        }))
      );
    });
  }

  return people;
}

// ============================================================
// FUNCIÓN GET - Obtener todos los PLANETAS
// ============================================================
async function getAllPlanets() {
  const firstPageResponse = await fetch(`${BASE_URL}/planets?page=1&limit=10`);
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.total_pages;

  const planets = firstPageData.results.map((p) => ({
    id: p.uid,
    name: p.name,
    type: 'planets',
    api: 'starwarsapi',
    image_path: `${IMAGE_BASE_URL}/planets/${p.uid}.jpg`,
  }));

  if (totalPages > 1) {
    const urls = [];
    for (let i = 2; i <= totalPages; i++) {
      urls.push(`${BASE_URL}/planets?page=${i}&limit=10`);
    }

    const pagesData = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    pagesData.forEach((page) => {
      planets.push(
        ...page.results.map((p) => ({
          id: p.uid,
          name: p.name,
          type: 'planets',
          api: 'starwarsapi',
          image_path: `${IMAGE_BASE_URL}/planets/${p.uid}.jpg`,
        }))
      );
    });
  }

  return planets;
}

// ============================================================
// FUNCIÓN GET - Obtener todos los VEHÍCULOS
// ============================================================
async function getAllVehicles() {
  const firstPageResponse = await fetch(`${BASE_URL}/vehicles?page=1&limit=10`);
  const firstPageData = await firstPageResponse.json();

  const totalPages = firstPageData.total_pages;

  const vehicles = firstPageData.results.map((v) => ({
    id: v.uid,
    name: v.name,
    type: 'vehicles',
    api: 'starwarsapi',
    image_path: `${IMAGE_BASE_URL}/vehicles/${v.uid}.jpg`,
  }));

  if (totalPages > 1) {
    const urls = [];
    for (let i = 2; i <= totalPages; i++) {
      urls.push(`${BASE_URL}/vehicles?page=${i}&limit=10`);
    }

    const pagesData = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );

    pagesData.forEach((page) => {
      vehicles.push(
        ...page.results.map((v) => ({
          id: v.uid,
          name: v.name,
          type: 'vehicles',
          api: 'starwarsapi',
          image_path: `${IMAGE_BASE_URL}/vehicles/${v.uid}.jpg`,
        }))
      );
    });
  }

  return vehicles;
}

// ============================================================
// FUNCIÓN GET - Detalle de PERSONAJE
// ============================================================
async function getPersonById(id) {
  const res = await fetch(`${BASE_URL}/people/${id}`);
  if (!res.ok) throw new Error('Person not found');
  const data = await res.json();

  return { 
    ...data.result.properties,
    id: data.result.uid,
    api: 'starwarsapi', 
    type: 'people',
    image_path: `${IMAGE_BASE_URL}/characters/${id}.jpg`,
  };
}

// ============================================================
// FUNCIÓN GET - Detalle de PLANETA
// ============================================================
async function getPlanetById(id) {
  const res = await fetch(`${BASE_URL}/planets/${id}`);
  if (!res.ok) throw new Error('Planet not found');
  const data = await res.json();

  return { 
    ...data.result.properties,
    id: data.result.uid,
    api: 'starwarsapi', 
    type: 'planets',
    image_path: `${IMAGE_BASE_URL}/planets/${id}.jpg`,
  };
}

// ============================================================
// FUNCIÓN GET - Detalle de VEHÍCULO
// ============================================================
async function getVehicleById(id) {
  const res = await fetch(`${BASE_URL}/vehicles/${id}`);
  if (!res.ok) throw new Error('Vehicle not found');
  const data = await res.json();

  return { 
    ...data.result.properties,
    id: data.result.uid,
    api: 'starwarsapi', 
    type: 'vehicles',
    image_path: `${IMAGE_BASE_URL}/vehicles/${id}.jpg`,
  };
}

// ============================================================
// OBJETO EXPORTADO CON TODOS LOS SERVICIOS
// ============================================================
const starWarsApiServices = {
  getAllPeople,
  getAllPlanets,
  getAllVehicles,
  getPersonById,
  getPlanetById,
  getVehicleById,
};

export default starWarsApiServices;