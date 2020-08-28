import React from 'react'
import { GifgridItem } from './GifgridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:image, loading} = useFetchGifs(category);
   
    return (
        <>
        <h3 >{category}</h3>  

         {loading && "loading"}

        <div className="card-grid ">         
                          
                {   image.map(img => (
                    <GifgridItem  
                    key={img.id}
                    {...img}/>
                    ))
                }           
        </div> 
        </>
    )
}
