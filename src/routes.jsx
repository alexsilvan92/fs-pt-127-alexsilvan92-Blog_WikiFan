// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { TheSimpsonsApi } from './pages/TheSimpsonsApiPage';
import { PokeApi } from './pages/PokeApiPage';
import { BobsBurguerApi } from './pages/BobsBurguerApiPage';
import { TheStarWarsApi } from './pages/TheStarWarsApiPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home />} />

      <Route path="/thesimpsonsapi" element={<TheSimpsonsApi />} />

      <Route path="/pokeapi">
        <Route path="pokemon" element={<PokeApi />} />
        <Route path="pokemon/:name" element={<PokeApi />} />

        <Route path="pokeball" element={<PokeApi />} />
        <Route path="pokeball/:name" element={<PokeApi />} />

        <Route path="pokegame" element={<PokeApi />} />
        <Route path="pokegame/:name" element={<PokeApi />} />
      </Route>

      <Route path="/bobsburguerapi" element={<BobsBurguerApi />} />

      <Route path="/thestarwarsapi" element={<TheStarWarsApi />} />

      <Route path="/demo" element={<Demo />} />
    </Route>,
  ),
);
