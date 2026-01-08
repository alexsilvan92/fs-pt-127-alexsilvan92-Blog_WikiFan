import logo_theSimpsonsApi from "../assets/img/logo_theSimpsonsApi.webp";
import logo_pokeApi from "../assets/img/logo_pokeApi.png";
import logo_bobsBurguerApi from "../assets/img/logo_bobsBurguerApi.ico";
import logo_theStarWarsApi from "../assets/img/logo_theStarWarsApi.png";

import { ButtonDropdownApis } from "./ButtonDropdownApis";

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <p>
            Feito con <i className="fa fa-heart text-danger" /> by{" "}
            <a target="_blank" href="https://github.com/alexsilvan92">
                <i className="fa-brands fa-github"></i> Alex Silvan
            </a>
            .
        </p>
        <p>
            {" "}
            A partir del{" "}
            <a
                target="_blank"
                href="https://github.com/4GeeksAcademy/react-hello-webapp"
            >
                Template react-hello-webapp
            </a>{" "}
            de{" "}
            <a target="_blank" href="https://4geeks.com/">
                4Geeks Academy
            </a>
            .
        </p>
       
            <ButtonDropdownApis />
        
    </footer>
);
