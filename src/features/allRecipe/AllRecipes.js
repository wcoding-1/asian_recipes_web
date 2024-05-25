import  Recipes from "../../components/helperFunc/Recipes";
import { loadData } from "./allRecipesSlice";
import { Button } from "../../components/helperFunc/Button";
import './allrecipe.css';



import { useEffect } from "react";

function AllRecipes(props) {
    const {allRecipes, dispatch} = props;

const getData = ()=>{
    dispatch(loadData())
}

useEffect(getData,[])

const onHandleAddRecipe = ()=>{

}


return(
    <div className="recipes_container">
        
    {   
        allRecipes.map((recipe)=>   
        <Recipes recipe={recipe} key={recipe.id}>
            <Button handleClick={onHandleAddRecipe(recipe)}>
                Add to Favorite
            </Button>
        </Recipes>
    
    
    
    ) 
    }
   
    </div>
)
}

export default AllRecipes;