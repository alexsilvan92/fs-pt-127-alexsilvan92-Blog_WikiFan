export const CardMainPokedex = () => ( 
<li className="col-6 col-sm-4 col-md-3 col-lg-2">
            <article className="pokemon-card animating">
                <a href="/es/pokedex/bulbasaur">
                    <img
                        className="img-fluid"
                        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png"
                        alt="Bulbasaur"
                    />
                </a>

                <div className="pokemon-info text-center mt-2">
                    <p className="id mb-1">
                        <span className="number-prefix">N.º </span>0001
                    </p>
                    <h5 className="mb-2">Bulbasaur</h5>

                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                        <span className="pill bg-grass">Planta</span>
                        <span className="pill bg-poison">Veneno</span>
                    </div>
                </div>
            </article>
        </li>
        );