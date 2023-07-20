import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(["Search"])

    return   (
        <>
            <h2 className="titulo">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <div className="ol-grid contenedor">
                {
                    categories.map(category => {
                        return <GifGrid category={category} key={category} />
                    })
                }
            </div>
            
        </>
    )
}