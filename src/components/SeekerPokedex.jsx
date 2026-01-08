export const SeekerPokedex = () => (
    <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
        <div className="filter-text-search w-100">
            <label className="form-label fw-bold d-flex justify-content-center">
                Búsqueda por Nombre o Número
            </label>

            <div className="d-flex gap-2 flex-nowrap">
                <input
                    type="text"
                    className="form-control search-input flex-grow-1"
                    placeholder="Ej. Pikachu o 025"
                    autoComplete="off"
                />

                <button className="btn btn-primary flex-shrink-0">Buscar</button>
            </div>
        </div>
    </div>
);