import { GridPokedex } from "./GridPokedex";
import { SeekerPokedex } from "./SeekerPokedex";
import { FavoritesPokedex } from "./FavoritesPokedex";
import { SelectorPokedex } from "./SelectorPokedex";

export const Pokedex = () => (
    <div>
        <div className="pokedex-filter-header container-fluid py-4">
            <div className="row align-items-center">
                
                {/* SELECTOR */}
                <SelectorPokedex />
                
                {/* BUSCADOR */}
                <SeekerPokedex />

                {/* FAVORITOS */}
                <FavoritesPokedex/>
            </div>
        </div>

        <GridPokedex />
    </div>
);
