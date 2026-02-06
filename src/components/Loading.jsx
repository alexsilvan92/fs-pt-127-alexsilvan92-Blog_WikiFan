export const Loading = ({ message = 'Cargando...' }) => {
  return (
    <div className="container text-center py-5">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
        <div className="mb-4">
          <div 
            className="spinner-border text-primary" 
            role="status" 
            style={{ width: '4rem', height: '4rem' }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
        <h2 className="display-6 mb-3">⏳ {message}</h2>
        <p className="lead text-muted">
          Por favor, espera mientras cargamos la información...
        </p>
      </div>
    </div>
  );
};