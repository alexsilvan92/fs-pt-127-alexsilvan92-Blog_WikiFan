// hooks/useGlobalReducer.jsx
import { useContext, useReducer, createContext, useEffect } from 'react';
import storeReducer, { initialStore } from '../store'; // Reducer y estado inicial

// ======================================
// CONTEXTO GLOBAL
// ======================================
const StoreContext = createContext();

// ======================================
// PROVEEDOR DEL STORE
// ======================================
export function StoreProvider({ children }) {
  // ======== Cargar favoritos de localStorage ========
  let storedFavorites = [];
  try {
    const parsed = JSON.parse(localStorage.getItem('wikiStore'));
    storedFavorites = Array.isArray(parsed) ? parsed : [];
  } catch {
    storedFavorites = [];
  }

  // Inicializar el reducer con favoritos desde localStorage
  const [store, dispatch] = useReducer(storeReducer, {
    ...initialStore(),
    favorites: storedFavorites, // Solo persistimos favoritos
  });

  // ======== Guardar favoritos automáticamente en localStorage ========
  useEffect(() => {
    try {
      localStorage.setItem('wikiStore', JSON.stringify(store.favorites));
    } catch (e) {
      console.error('Error guardando favoritos en localStorage', e);
    }
  }, [store.favorites]);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// ======================================
// HOOK PERSONALIZADO PARA ACCEDER AL STORE
// ======================================
export default function useGlobalReducer() {
  const { store, dispatch } = useContext(StoreContext);
  return { store, dispatch };
}
