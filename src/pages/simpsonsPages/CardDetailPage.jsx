import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import simpsonsApiServices from '../../services/theSimpsonsApiServices';
import { CardDetail } from '../../components/CardDetail';
import { NotFoundItem } from '../../components/NotFoundItem';
import useGlobalReducer from '../../hooks/useGlobalReducer';

export const SimpsonsCardDetailPage = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let data;

        switch (type) {
          case 'characters':
            data = await simpsonsApiServices.getCharacterById(id);
            break;
          case 'episodes':
            data = await simpsonsApiServices.getEpisodeById(id);
            break;
          case 'locations':
            data = await simpsonsApiServices.getLocationById(id);
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

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error || !item) return <NotFoundItem />;

  return <CardDetail item={item} />;
};
