import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import starWarsApiServices from '../../services/starWarsApiServices';
import { CardDetail } from '../../components/CardDetail';
import { Loading } from '../../components/Loading';
import { NotFoundItem } from '../../components/NotFoundItem';

export const StarWarsCardDetailPage = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let data;

        switch (type) {
          case 'people':
            data = await starWarsApiServices.getPersonById(id);
            break;
          case 'planets':
            data = await starWarsApiServices.getPlanetById(id);
            break;
          case 'vehicles':
            data = await starWarsApiServices.getVehicleById(id);
            break;
          default:
            throw new Error('Invalid type');
        }

        setItem({ ...data, type });
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [type, id]);

  if (loading) return <Loading message="Cargando..." />;
  if (error || !item) return <NotFoundItem />;

  return <CardDetail item={item} />;
};