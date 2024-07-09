import { useState } from "react";




export const AddCategory = ({ onNewCategory }) =>{

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue( target.value )

    }

    const onSubmit = (event) =>{
        event.preventDefault()//permite que al actualizarse no borre la consola

        if(inputValue.trim().length <= 1) return; // si el valor del input es menor que uno no busca nada

            //el valor de la categoria no tiene espacios
         onNewCategory( inputValue.trim() ); //segunda Forma
        // setCategories( e =>[...e, inputValue]) primera forma
        setInputValue('');
    
    }


        return(

            <form 
            onSubmit={ onSubmit }
            >
                <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
                />

            </form>
            

        )
}