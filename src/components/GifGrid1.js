import React, { useState, useEffect } from 'react'

import { getGif } from '../helpers/getGifs';

const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    
    return (
        <>
        <h3>{category}</h3> 
        <div className='card-grid'>
            {
                images.map((img)=>{
                   return <GifGridItem key={img.id} {...img}/>
                 })
            }
        </div>
        </>
     )
    }
export default GifGrid
