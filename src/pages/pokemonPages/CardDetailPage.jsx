import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import pokeApiServices from '../../services/pokeApiServices';
import { CardDetail } from '../../components/CardDetail';
import { NotFoundItem } from '../../components/NotFoundItem';

export const PokeApiCardDetailPage = () => {
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let data;

        switch (type) {
          case 'pokemon':
            data = await pokeApiServices.getPokemonById(id);
            break;
          case 'pokeball':
            data = await pokeApiServices.getPokeBallById(id);
            break;
          case 'game':
            data = await pokeApiServices.getGameById(id);
            break;
          default:
            throw new Error('Invalid type');
        }

        setItem({
          ...data,
          type,
          api: 'pokeapi',
        });
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

