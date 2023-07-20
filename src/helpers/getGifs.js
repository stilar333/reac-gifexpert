export const getGif= async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=8ZFRQ24ZGQDAQGGLewS4rwi1XaP6tiCn`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return gifs;
}