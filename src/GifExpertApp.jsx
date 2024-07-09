import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dark soul' ]);

    const onAddCategory = (newCategory) =>{
            // auntetificar la busqueda: que distinga entra mayuscula y minuscula

            let categoriesUp= categories.map((x)=>x.toUpperCase()) 

            if(categoriesUp.includes(newCategory.toUpperCase())) return;

        setCategories([newCategory,...categories ])
        // setCategories( cat => [...cat,'Valorant'] )


    



    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory  }
            
            // setCategories={ setCategories }
            />

            



            {
                categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category={ category}
                    />
                    
                ))
            }
                


        
        </>

    )
}