import React, {useState} from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';


export const GifExpert = () => {

   const [categories, setcategories] = useState(["goku"]);
    
     return ( 
        <div>
             <h2>Gif Expert</h2>         
             <hr />
             <AddCategory setcategories={setcategories}/>          

            <ol>
              {
                 categories.map(category => {
                 return <GifGrid key={category} category={category} />
                 })
              }
            </ol>                   

        </div>
    );

}
