import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import bobsBurgersApiServices from '../../services/bobsBurgerApiServices';
import { CardDetail } from '../../components/CardDetail';
import { NotFoundItem } from '../../components/NotFoundItem';

export const BobsBurgersCardDetailPage = () => {
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
            data = await bobsBurgersApiServices.getCharacterById(id);
            break;
          case 'endCreditsSequences':
            data = await bobsBurgersApiServices.getEndCreditsSequenceById(id);
            break;
          case 'storesNextDoor':
            data = await bobsBurgersApiServices.getStoreById(id);
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
