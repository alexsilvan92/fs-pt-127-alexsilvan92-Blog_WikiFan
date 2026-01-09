import useGlobalReducer from "../../hooks/useGlobalReducer";
import { CardMainPokedex } from "./CardMainPokedex";

export const GridPokedex = ({view}) => {

    const library = view

    return (
        <section className="pokedex-results container-fluid overflow-visible">
            <ul className="results row list-unstyled g-4">
                {library.map((item) => (
                    <CardMainPokedex
                        key={item.id}
                        item={item}
                    />
                ))}
            </ul>

            <div className="text-center my-4">
                <button className="btn btn-primary">Cargar más Pokémon</button>
            </div>
            
        </section>
    );
};
