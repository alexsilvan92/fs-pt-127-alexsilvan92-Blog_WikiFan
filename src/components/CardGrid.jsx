import { Link, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';

import { getItemImage } from '../utils/getItemImage';
import { NotFoundItem } from './NotFoundItem';

export const CardGrid = ({ items, baseRoute }) => {
  const { pathname } = useLocation();
  const [visibleCount, setVisibleCount] = useState(24);
  const { store, dispatch } = useGlobalReducer();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  const visibleItems = items.slice(0, visibleCount);

  if (!items || items.length === 0) return <NotFoundItem />;

  return (
    <div className="container-fluid overflow-visible">
      <ul className="row list-unstyled g-4">
        {visibleItems.map((item) => {
          const imgSrc = getItemImage(item);
          const isFavorite = store.favorites.some((f) => f.name === item.name);
          const handleAddFavorite = () =>
            dispatch({ type: 'add_favorite', payload: item });
          const handleRemoveFavorite = () =>
            dispatch({ type: 'remove_favorite', payload: item });
          return (
            <li
              key={`${item.type}-${item.id}`}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
            >
              <div className="card grid-card position-relative shadow-sm overflow-hidden">
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
                  to={`${baseRoute}/${item.id}`}
                  className="text-decoration-none text-black"
                >
                  <img
                    src={imgSrc}
                    className="card-img-top img-fluid grid-img"
                    alt={item.name}
                  />
                  <div className="card-body text-center p-2">
                    <h5 className="card-title mb-2 text-capitalize">
                      {item.name}
                    </h5>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      {visibleCount < items.length && (
        <div className="text-center my-4">
          <button className="btn btn-primary px-4" onClick={handleLoadMore}>
            Cargar más …
          </button>
        </div>
      )}
    </div>
  );
};
