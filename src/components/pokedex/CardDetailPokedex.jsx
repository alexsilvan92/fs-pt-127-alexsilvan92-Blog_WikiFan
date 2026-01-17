import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import { ArrowLeft, Coins, Gamepad2 } from 'lucide-react';
import img_not_found from '../../assets/img/img_not_found.png';

export const CardDetailPokedex = ({ type, item }) => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalReducer();
  const isFavorite = store.favorites.some((f) => f.name === item.name);
  const handleAddFavorite = () =>
    dispatch({ type: 'add_favorite', payload: { ...item, type } });
  const handleRemoveFavorite = () =>
    dispatch({ type: 'remove_favorite', payload: { ...item, type } });
  const handleBack = () => navigate(-1);
  const imageSrc =
    item.sprites?.other?.['official-artwork']?.front_default ||
    item.sprites?.front_default ||
    item.sprites?.default ||
    img_not_found;


  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* CABECERA COMÚN */}
          <div className="position-relative col-md-4 bg-light text-center p-4">
            {!isFavorite && (
              <button
                className="position-absolute top-0 end-0 m-1 btn btn-transparency btn-sm rounded-circle"
                onClick={handleAddFavorite}
              >
                🤍
              </button>
            )}
            {isFavorite && (
              <button
                className="position-absolute top-0 end-0 m-1 btn btn-transparency btn-sm rounded-circle"
                onClick={handleRemoveFavorite}
              >
                ❤️
              </button>
            )}
            <img
              src={imageSrc}
              className="card-img-top img-fluid"
              alt={item.name}
            />
            <h2 className="text-capitalize">{item.name}</h2>
            <span className="badge bg-primary fs-6">#{item.id.toString().padStart(4, '0')}</span>
          </div>

          {/* CONTENIDO SEGÚN TIPO */}
          <div className="col-md-8 p-4">
            {type === 'pokemon' && (
              <>
                <h4>Estadísticas</h4>
                <ul className="list-group list-group-flush mb-3">
                  {item.stats.map((s) => (
                    <li
                      key={s.stat.name}
                      className="list-group-item text-capitalize"
                    >
                      {s.stat.name}: {s.base_stat}
                    </li>
                  ))}
                </ul>

                <h5>Tipos</h5>
                {item.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="badge rounded-pill bg-secondary-subtle text-secondary p-2 mx-2 text-capitalize"
                  >
                    {t.type.name}
                  </span>
                ))}
              </>
            )}

            {type === 'pokeball' && (
              <>
                <h4>Efecto</h4>
                <p className="text-muted">{item.effect_entries?.[0]?.effect}</p>

                <p>
                  <Coins size={16} className="me-2" />
                  Precio: {item.cost}
                </p>
              </>
            )}

            {type === 'game' && (
              <>
                <h4>Juego</h4>
                <p>
                  <Gamepad2 size={16} className="me-2" />
                  Grupo de versión: {item.version_group.name}
                </p>

                <h5>Nombres</h5>
                {item.names.map((n) => (
                  <span
                    key={n.language.name}
                    className="badge bg-light text-dark me-2 mb-1"
                  >
                    {n.language.name}: {n.name}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button onClick={handleBack} className="btn btn-outline-secondary m-3">
          <ArrowLeft className="me-2" size={18} />
          Volver
        </button>
      </div>
    </div>
  );
};
