import { Link } from 'react-router-dom';
import useGlobalReducer from '../../hooks/useGlobalReducer';

import img_not_found from '../../assets/img/img_not_found.png';

export const FavoritesPokedex = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleRemove = (item) =>
    dispatch({ type: 'remove_favorite', payload: item });

  return (
    <div className="col-12 col-md-4 mb-2 mb-lg-0">
      <div className="dropdown rounded">
        <button
          className="btn btn-outline-danger dropdown-toggle w-100 fw-semibold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ❤️ Favoritos
          <span className="badge bg-danger ms-2">
            {store.favorites.length.toString().padStart(3, '0')}
          </span>
        </button>

        <ul className="dropdown-menu category-dropdown col-12">
          {store.favorites.length === 0 && (
            <li className="dropdown-item text-muted text-center">
              No tienes favoritos aún
            </li>
          )}

          {store.favorites.map((f) => (
            <li
              key={f.name}
              className="dropdown-item d-flex align-items-center justify-content-between"
            >
              <Link
                to={`/pokeapi/${f.type}/${f.name}`}
                className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              >
                <img
                  src={
                    f.sprites?.other?.['official-artwork']?.front_default ||
                    f.sprites?.front_default ||
                    f.sprites?.default ||
                    img_not_found
                  }
                  alt={f.name}
                  className="favorite-img"
                />
                <span className="text-capitalize">{f.name}</span>
              </Link>
              <button
                className="btn btn-outline-danger btn-sm ms-2"
                onClick={() => handleRemove(f)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
