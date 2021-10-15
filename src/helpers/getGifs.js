


export const getGifs = async ( category ) => {

    // Realizar petición http de una API
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=BMsdZQVRLkO2T9wp4ZsGx7qhObU0KCfP`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // Extraer información de la data que me interesa
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
    
}