import { Link, useLocation, useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

import { Favorites } from "../components/Favorites.jsx";
import { Seeker } from '../components/Seeker.jsx';
import { Selector } from "../components/Selector.jsx";
import { ButtonDropdownApisNavbar } from './ButtonDropdownApisNavbar';

import logo_fanwikiV2 from '../assets/img/logo_fanwikiV2.png';
import logo_pokedexV3 from '../assets/img/logo_pokedexV3.png';
import logo_thesimpsonsapi from '../assets/img/logo_theSimpsonsApi.webp';

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const location = useLocation();
  const navigate = useNavigate();

  // ===================================================================
  // FUNCIÓN: Renderizado Condicional De Headers (según la ruta actual)
  // ===================================================================
  const renderHeader = () => {
    const path = location.pathname;

    // ========================================
    // PÁGINA: Home (/)
    // ========================================
    if (path === '/') {
      return (
        <Link to="/" className="text-decoration-none mx-auto mb-2">
          <div className="d-flex align-items-center gap-2">
            <img
              src={logo_fanwikiV2}
              alt="Logo Fan Wiki"
              className="logo-navbar"
            />
          </div>
        </Link>
      );
    }

    // ========================================
    // PÁGINA: Pokedex (/pokeapi)
    // ========================================
    if (path.startsWith('/pokeapi')) {
      return (
        <Link
          to="/pokeapi"
          className="text-decoration-none mx-auto mb-2"
        >
          <img
            src={logo_pokedexV3}
            alt="Logo Fan Wiki"
            className="logo-navbar"
          />
        </Link>
      );
    }

    // ========================================
    // PÁGINA: SimpsonPedia (/thesimpsonsapi)
    // ========================================
    if (path.startsWith('/thesimpsonsapi')) {
      return (
        <Link
          to="/thesimpsonsapi"
          className="text-decoration-none mx-auto mb-2"
        >
          <img
            src={logo_thesimpsonsapi}
            alt="Logo Fan Wiki"
            className="logo-navbar"
          />
        </Link>
      );
    }

    // ========================================
    // OTRAS PÁGINAS (Demo, etc.)
    // ========================================
    return <span className="text-dark">{path} Sin Construir</span>;
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
          {renderHeader()}
          <ButtonDropdownApisNavbar />
        </div>
      </nav>
      <div className="navbar-light bg-light container-fluid pb-2 mb-2">
        <div className="row align-items-start">
          {/* SELECTOR */}
          <Selector />
          {/* BUSCADOR */}
          <Seeker />
          {/* FAVORITOS */}
          <Favorites />
        </div>
      </div>
    </>
  );
};
