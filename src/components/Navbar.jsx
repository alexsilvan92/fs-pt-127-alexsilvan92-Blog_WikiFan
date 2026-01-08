import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

import { ButtonDropdownApisNavbar } from "./ButtonDropdownApisNavbar";

import logo_fanwikiV2 from "../assets/img/logo_fanwikiV2.png";
import logo_pokedexV3 from "../assets/img/logo_pokedexV3.png";

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
        if (path === "/") {
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
        if (path === "/pokeapi") {
            return (
                <Link to="/pokeapi" className="text-decoration-none mx-auto mb-2">
                    <img
                        src={logo_pokedexV3}
                        alt="Logo Fan Wiki"
                        className="logo-navbar"
                    />
                </Link>
            );
        }

        // ========================================
        // PÁGINA: Detalle de Contacto (/single-contact/:theId)
        // ========================================
        if (path.startsWith("/single-contact/")) {
            // ============================================
            // BUSCAR EL CONTACTO en el store por ID
            // ============================================
            // Buscamos en el array de contacts el que tenga el id que viene en la URL
            const singleContact = store.contacts.find(
                (contact) => contact.id === parseInt(theId)
            );

            return <span className="text-dark"> {singleContact?.name} </span>;
        }

        // ========================================
        // OTRAS PÁGINAS (Demo, etc.)
        // ========================================
        return <span className="text-dark">{path} Sin Construir</span>;
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                {renderHeader()}
                <ButtonDropdownApisNavbar />
            </div>
        </nav>
    );
};
