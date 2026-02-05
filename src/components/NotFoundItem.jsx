import { Link, useLocation } from 'react-router-dom';

import img_not_found from '../assets/img/img_not_found.png'

export const NotFoundItem = () => {
  const { pathname } = useLocation();
  const parentRoute = '/' + pathname.split('/')[1];
  return (
    <div className="container text-center py-5">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-4 mb-3">❌ Item no encontrado</h1>
        <p className="lead mb-4">
          Lo sentimos, no hemos podido encontrar el item que estabas buscando.
        </p>
        <img
          src={img_not_found}
          alt="Item no encontrado"
          className="img-fluid mb-4"
          style={{ maxWidth: '200px' }}
        />
        <Link to={parentRoute} className="btn btn-primary btn-lg">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
