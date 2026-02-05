// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { TheSimpsonsApiPage } from './pages/simpsonsPages/TheSimpsonsApiPage';
import { SimpsonsCardGridPage } from './pages/simpsonsPages/CardGridPage';
import { SimpsonsCardDetailPage } from './pages/simpsonsPages/CardDetailPage';
import { PokeApiPage } from './pages/pokemonPages/PokeApiPage';
import { PokeApiCardGridPage } from './pages/pokemonPages/CardGridPage';
import { PokeApiCardDetailPage } from './pages/pokemonPages/CardDetailPage';
import { BobsBurgersApiPage } from './pages/bobsburgersPages/BobsBurgersApiPage';
import { BobsBurgersCardGridPage } from './pages/bobsburgersPages/CardGridPage';
import { BobsBurgersCardDetailPage } from './pages/bobsburgersPages/CardDetailPage';
import { StarWarsApiPage } from './pages/starwarsPages/StarWarsApiPage';
import { StarWarsCardGridPage } from './pages/starwarsPages/CardGridPage';
import { StarWarsCardDetailPage } from './pages/starwarsPages/CardDetailPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home />} />

      <Route path="/thesimpsonsapi">
        <Route index element={<TheSimpsonsApiPage />} />
        <Route path=":type" element={<SimpsonsCardGridPage />} />
        <Route path=":type/:id" element={<SimpsonsCardDetailPage />} />
      </Route>

      <Route path="/pokeapi">
        <Route index element={<PokeApiPage />} />
        <Route path=":type" element={<PokeApiCardGridPage />} />
        <Route path=":type/:id" element={<PokeApiCardDetailPage />} />
      </Route>

      <Route path="/bobsburgersapi">
        <Route index element={<BobsBurgersApiPage />} />
        <Route path=":type" element={<BobsBurgersCardGridPage />} />
        <Route path=":type/:id" element={<BobsBurgersCardDetailPage />} />
      </Route>

      <Route path="/starwarsapi">
        <Route index element={<StarWarsApiPage />} />
        <Route path=":type" element={<StarWarsCardGridPage />} />
        <Route path=":type/:id" element={<StarWarsCardDetailPage />} />
      </Route>

      <Route path="/demo" element={<Demo />} />
    </Route>,
  ),
);
