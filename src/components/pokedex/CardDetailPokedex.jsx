export const CardDetailPokedex = () => (
  <div className="container mt-5">
    <div className="mb-4">
      <button onClick={handleBack} className="btn btn-outline-secondary">
        <ArrowLeft className="me-2" size={18} /> Volver
      </button>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-lg">
          <div className="row g-0 align-items-center">
            <div className="col-md-5 text-center bg-light p-4">
              <img
                src={
                  pokemon.sprites?.other['official-artwork'].front_default ||
                  pokemon.sprites?.front_default
                }
                alt={pokemon.name}
                className="img-fluid mb-3"
                style={{ maxHeight: 250 }}
              />
              <h2 className="text-capitalize mb-2">
                <ImageIcon className="me-2" size={24} />
                {pokemon.name}
              </h2>
              <span className="badge bg-primary fs-6 mb-2">#{pokemon.id}</span>
              <div className="mb-2">
                {pokemon.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="badge bg-warning text-dark me-2 text-uppercase"
                  >
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-7 p-4">
              <h4 className="mb-3">Características</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex align-items-center">
                  <Ruler className="me-2" size={18} />
                  <strong>Altura:</strong> {pokemon.height / 10} m
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <Weight className="me-2" size={18} />
                  <strong>Peso:</strong> {pokemon.weight / 10} kg
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <Heart className="me-2" size={18} />
                  <strong>HP base:</strong>{' '}
                  {pokemon.stats.find((s) => s.stat.name === 'hp')?.base_stat}
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <Flame className="me-2" size={18} />
                  <strong>Ataque:</strong>{' '}
                  {
                    pokemon.stats.find((s) => s.stat.name === 'attack')
                      ?.base_stat
                  }
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <Shield className="me-2" size={18} />
                  <strong>Defensa:</strong>{' '}
                  {
                    pokemon.stats.find((s) => s.stat.name === 'defense')
                      ?.base_stat
                  }
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <Zap className="me-2" size={18} />
                  <strong>Velocidad:</strong>{' '}
                  {
                    pokemon.stats.find((s) => s.stat.name === 'speed')
                      ?.base_stat
                  }
                </li>
              </ul>
              <h5 className="mb-2">Habilidades</h5>
              <ul className="mb-3">
                {pokemon.abilities.map((a) => (
                  <li key={a.ability.name} className="text-capitalize">
                    {a.ability.name}{' '}
                    {a.is_hidden && (
                      <span className="badge bg-secondary ms-2">Oculta</span>
                    )}
                  </li>
                ))}
              </ul>
              <h5 className="mb-2">Movimientos principales</h5>
              <div className="mb-2">
                {pokemon.moves.slice(0, 6).map((m) => (
                  <span
                    key={m.move.name}
                    className="badge bg-info text-dark me-2 mb-1 text-capitalize"
                  >
                    {m.move.name}
                  </span>
                ))}
                {pokemon.moves.length > 6 && (
                  <span className="badge bg-light text-dark">
                    +{pokemon.moves.length - 6} más
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
