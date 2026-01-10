export const SeekerPokedex = () => (
  <div className="col-12 col-md-4 mb-2 mb-lg-0">
    <div className="w-100">
      <div className="input-group shadow-sm rounded">
        <input
          type="text"
          className="form-control btn border-dark"
          placeholder="Nombre o Nº (ej. Pikachu o 025)"
          autoComplete="off"
        />
        <button className="btn btn-outline-dark shadow-lg px-3" type="button">
          🔍
        </button>
      </div>
    </div>
  </div>
);
