import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        

        // Obtener imágenes de las categorias, a los 3 segundos de cargando, pasar la información al componente GifGrid.js
        getGifs( category )
            .then( imgs => {

            // console.log(imgs);

                    setState({
                        data: imgs,
                        loading: false
                    });
             
            })

    }, [])




    return state; // { data: [], loading: true };
}
