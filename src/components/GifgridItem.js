
import React from 'react'

export const GifgridItem = ( {title, url }) => {

    return (
        <div className="card animate__animated animate__tada" >
           <img src={ url } alt={ title } />
            <p> {title} </p>
        </div>
    )
}
