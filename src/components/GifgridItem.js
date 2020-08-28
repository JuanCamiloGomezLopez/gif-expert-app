
import React from 'react'



import '../index.css';

export const GifgridItem = ( {id, title, url }) => {

console.log({id,title,url});

    return (
        <div className="card animate__animated animate__tada" >
           <img src={ url } alt={ title } />
            <p> {title} </p>
        </div>
    )
}
