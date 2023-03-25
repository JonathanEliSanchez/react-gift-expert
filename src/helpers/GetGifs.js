export const GetGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=rv4Z6hEn5M2lCF9tZ3pZisvrv3paSZLD&q=${ category }&limit=5&offset=0&rating=g&lang=es`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url

  }));
    return gifs;





}
