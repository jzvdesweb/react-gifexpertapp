import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // Que puedan escribir en el input, y que se reciba lo escrito
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Cunedo se da Enter, que dispare una acción, y que no se recargue la página
    const handleSubmit = (e) => {
        e.preventDefault();

        // Que no se pueda dar enter, ni agregar nada si tiene menos de dos letras
        if ( inputValue.trim().length > 2) {
            //console.log('Submit hecho')
        setCategories( cats => [ inputValue, ...cats ] );
        setInputValue('');
        }
       
    }

    return (
        <>
            {/* Caja de Input */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </form>

            {/* Mostar lo que se esta escribiendo en el input*/}
            <h5> {inputValue} </h5>

        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}