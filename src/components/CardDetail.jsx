import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

import { NotFoundItem } from './NotFoundItem';
import { getItemImage } from '../utils/getItemImage';

export const CardDetail = ({ item }) => {
  if (!item) return <NotFoundItem />;

  console.log('🚀 CardDetail Cargado');

  const navigate = useNavigate();

  const { store, dispatch } = useGlobalReducer();

  const isFavorite = store.favorites.some(
    (f) => f.api === item.api && f.type === item.type && f.id === item.id,
  );

  const handleAddFavorite = () =>
    dispatch({ type: 'add_favorite', payload: item });

  const handleRemoveFavorite = () =>
    dispatch({ type: 'remove_favorite', payload: item });

  const handleBack = () => navigate(-1);

  const imgSrc = getItemImage(item);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="row g-0">
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
              src={imgSrc}
              className="card-img-top img-fluid"
              alt={item.name}
            />
            <h2 className="card-title">{item.name}</h2>
          </div>

          <div className="col-md-8 p-4">
            <div className="card-body">
              <ul className="list-group list-group-flush mt-3">
                {Object.entries(item).map(([key, value]) => {
                  if (
                    [
                      'id',
                      'name',
                      'portrait_path',
                      'image_path',
                      'first_appearance_ep_id',
                      'first_appearance_sh_id',
                      'first_appearance_ep',
                      'first_appearance_sh',
                      'type',
                      'api',
                      'stats',
                      'sprites',
                      'image',
                      'allOccupations',
                      'nicknames',
                      'relatives',
                      'wikiUrl',
                      'url',
                      'episodeUrl',
                      'episodeUrl',
                    ].includes(key)
                  )
                    return null;
                  let displayValue = '_Not_Data_';
                  if (Array.isArray(value)) {
                    displayValue = value.join(', ');
                  } else if (typeof value === 'object' && value !== null) {
                    displayValue = JSON.stringify(value);
                  } else if (value) {
                    displayValue = value;
                  }
                  return (
                    <li key={key} className="list-group-item break-word">
                      <strong className="text-capitalize">{key}:</strong>{' '}
                      {displayValue}
                    </li>
                  );
                })}
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleBack}
                >
                  ⬅️ VOLVER
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
