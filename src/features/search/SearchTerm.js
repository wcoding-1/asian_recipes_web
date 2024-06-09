import { useState } from "react";
import "./style.css";
import { searchTermAction } from "./searchTermSlice";

import { useSelector, useDispatch } from "react-redux";
import {Recipes} from '../../components/helperFunc/Recipes'
    
// {searchTerms, dispatch}
function SearchTerm() {
    const dispatch = useDispatch()
   
    const [searchTerm , setSearchTerm] = useState('');
    

    const handleSearchTerm = ({target})=>{
       
        dispatch(searchTermAction(target.value))
        setSearchTerm(target.value)
    }

    
    return(
        <>
        <form>
            <input 
            onChange={handleSearchTerm} 
            type="search" name="search" 
            value={searchTerm } 
            placeholder="Search Favorite"
            />
        </form>
        </>
    )

    

  
        
    
}

export default SearchTerm;