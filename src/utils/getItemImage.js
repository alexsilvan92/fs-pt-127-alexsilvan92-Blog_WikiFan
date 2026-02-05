import img_not_found from '../assets/img/img_not_found.png';

export const getItemImage = (item) => {
  let imgSrc = img_not_found;

  if (item.api === 'thesimpsonsapi') {
    const path = item.portrait_path || item.image_path
    imgSrc = `https://cdn.thesimpsonsapi.com/500${path}`;
  }

  // POKEAPI
  if (item.api === 'pokeapi') {
    if (item.type === 'pokemon') {
      imgSrc = item.sprites?.front_default || img_not_found;
    }
    if (item.type === 'pokeball') {
      imgSrc = item.sprites?.default || img_not_found;
    }
    if (item.type === 'game') {
      imgSrc = img_not_found;
    }
  }

  return imgSrc;
};

