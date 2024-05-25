import  Recipes from "../../components/helperFunc/Recipes";
import { loadData } from "./allRecipesSlice";


import { useEffect } from "react";

function AllRecipes(props) {
    const {allRecipes, dispatch} = props;

const getData = ()=>{
    dispatch(loadData())
}

useEffect(getData,[])


return(
    <div className="recipes_container">
    {
        allRecipes.map((recipe)=>   
        <Recipes recipe={recipe} key={recipe.id}>

        </Recipes>
    
    
    
    ) 
    }
   
    </div>
)
}

export default AllRecipes;