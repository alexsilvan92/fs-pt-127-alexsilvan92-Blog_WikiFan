import { CardMainPokedex } from "./CardMainPokedex";

export const GridPokedex = () => (
    <section className="pokedex-results container-fluid overflow-visible">
        <ul className="results row list-unstyled g-4">
            <CardMainPokedex />
        </ul>

        <div className="text-center my-4">
            <button className="btn btn-primary">Cargar más Pokémon</button>
        </div>
    </section>
);
