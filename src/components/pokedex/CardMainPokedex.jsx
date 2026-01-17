import { Link } from 'react-router-dom';
import useGlobalReducer from '../../hooks/useGlobalReducer';


import img_not_found from '../../assets/img/img_not_found.png';

export const CardMainPokedex = ({ item, type }) => {
  const { store, dispatch } = useGlobalReducer();
  const handleAddFavorite = () =>
    dispatch({ type: 'add_favorite', payload: { ...item, type } });
  const handleRemoveFavorite = () =>
    dispatch({ type: 'remove_favorite', payload: { ...item, type } });
  const isFavorite = store.favorites.some((f) => f.name === item.name);

  const imageSrc =
    item.sprites?.other?.['official-artwork']?.front_default ||
    item.sprites?.front_default ||
    item.sprites?.default ||
    img_not_found;

  return (
    <li className=" col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="card custom-card position-relative shadow-sm overflow-hidden">
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

        <Link
          to={`/pokeapi/${type}/${item.name}`}
          className="text-decoration-none text-black"
        >
          <img
            src={imageSrc}
            className="card-img-top img-fluid"
            alt={item.name}
          />

          <div className="card-body text-center p-2">
            <p className="id mb-1">
              <span className="number-prefix">N.º </span>
              {item.id.toString().padStart(4, '0')}
            </p>
            <h5 className="card-title mb-2 text-capitalize">{item.name}</h5>
            <div className="d-flex justify-content-center gap-2 flex-wrap mx-2">
              {item?.types?.length > 0 &&
                item.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="badge rounded-pill bg-secondary-subtle text-secondary px-2 py-2 text-capitalize"
                  >
                    {t.type.name}
                  </span>
                ))}
            </div>
          </div>
        </Link>
      </div>
    </li>
  );
};
