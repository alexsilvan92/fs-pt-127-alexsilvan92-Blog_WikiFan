import { useState } from 'react';
import { CardMainPokedex } from './CardMainPokedex';

export const GridPokedex = ({ view }) => {
  const [visibleCount, setVisibleCount] = useState(24);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 24);
  };

  return (
    <section className="pokedex-results container-fluid overflow-visible">
      <ul className="results row list-unstyled g-4">
        {view.slice(0, visibleCount).map((item) => (
          <CardMainPokedex key={item.id} item={item} />
        ))}
      </ul>

      {visibleCount < view.length && (
        <div className="text-center my-4">
          <button className="btn btn-primary px-4" onClick={handleLoadMore}>
            Cargar más Pokémon
          </button>
        </div>
      )}
    </section>
  );
};