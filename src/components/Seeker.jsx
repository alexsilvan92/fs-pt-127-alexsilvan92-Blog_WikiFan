import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Seeker = () => {
  const { store } = useGlobalReducer();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // ===== Filtrado de items por nombre =====
  const getFilteredItems = (value) => {
    if (!value) return [];
    const allItems = [
      ...store.allPokemons,
      ...store.allPokeBalls,
      ...store.allPokeGames,
      ...store.allSimpsonsCharacters,
      ...store.allSimpsonsEpisodes,
      ...store.allSimpsonsLocations,
    ];

    return allItems
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 20); // máximo 20 sugerencias
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(getFilteredItems(value));
  };

  // ===== Navegar al detalle del item =====
  const handleSelect = (item) => {
    if (!item?.id || !item?.type || !item?.api) {
      console.warn('Item seleccionado incompleto:', item);
      return;
    }

    setQuery('');
    setSuggestions([]);
    navigate(`/${item.api}/${item.type}/${item.id}`);
  };

  // ===== Botón de búsqueda / Enter =====
  const handleSearch = () => {
    const filtered = getFilteredItems(query);
    if (filtered.length > 0) {
      handleSelect(filtered[0]);
    } else {
      alert('No se encontró ningún resultado');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // ===== Resaltar coincidencia =====
  const highlightMatch = (name) => {
    const index = name.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return name;

    const before = name.slice(0, index);
    const match = name.slice(index, index + query.length);
    const after = name.slice(index + query.length);

    return (
      <>
        {before}
        <span className="bg-warning">{match}</span>
        {after}
      </>
    );
  };

  return (
    <div className="col-12 col-md-4 mb-2 mb-lg-0 position-relative">
      <div className="w-100">
        <div className="input-group shadow-sm rounded">
          <input
            type="text"
            className="form-control btn border-dark"
            placeholder="Nombre (ej. Pikachu)"
            autoComplete="off"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-outline-dark shadow-lg px-3"
            type="button"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul
            className="list-group position-absolute w-100 mt-1 shadow-sm"
            style={{ zIndex: 1050 }}
          >
            {suggestions.map((item) => (
              <li
                key={`${item.type}-${item.id}`}
                className="list-group-item list-group-item-action text-capitalize"
                style={{ cursor: 'pointer' }}
                onClick={() => handleSelect(item)}
              >
                {highlightMatch(item.name)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
