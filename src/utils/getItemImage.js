import img_not_found from '../assets/img/img_not_found.png';

export const getItemImage = (item) => {
  let imgSrc = img_not_found;

  if (item.api === 'thesimpsonsapi') {
    const path = item.portrait_path || item.image_path;
    imgSrc = `https://cdn.thesimpsonsapi.com/500${path}`;
  }

  if (item.api === 'pokeapi')
    imgSrc = item.image_path || item.sprites?.front_default || item.sprites?.default || img_not_found;

  if (item.api === 'bobsburgersapi') imgSrc = item.image;

  if (item.api === 'starwarsapi') imgSrc = item.image_path;

  return imgSrc;
};
