import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    //Agregar un nuevo elemento al arreglo, mantengo las categorías anteriores y agrego una nueva.
    // const handleAdd = () => {
    //    // setCategories( [ ...categories, 'HunterXHunter'] );
    //    setCategories( cats => [ ...categories, 'HunterXHunter' ] );
    //}


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr />



            {/* Muestro en pantalla las categorías */}
            <ol>
                {
                    categories.map( (category) =>  (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>
        </>
    )
}
