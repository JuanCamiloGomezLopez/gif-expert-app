import React, {useState} from "react";
import propTypes from "prop-types";

export const AddCategory = ({setcategories})=> {
  
    const [inputValue, setinputValue] = useState("");

    const handInputChange = (e) => {
          setinputValue(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
      
       if (inputValue){
        setcategories( cats => [inputValue, ...cats]);
        setinputValue("");
       }      
    }
return (  
    <form onSubmit = {handleSubmit}>        
        <input
            type="text"
            value={ inputValue }  
            onChange={ handInputChange }               
        />  
    </form>   
);

} 

AddCategory.propTypes={
    setcategories: propTypes.func.isRequired   
}

