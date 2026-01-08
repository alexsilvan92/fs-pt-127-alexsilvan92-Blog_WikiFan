import { ButtonDropdownApisFooter } from "./ButtonDropdownApisFooter";

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

        <ButtonDropdownApisFooter />
    </footer>
);
