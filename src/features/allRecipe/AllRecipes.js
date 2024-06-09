import  Recipes from "../../components/helperFunc/Recipes";
import { loadData } from "./allRecipesSlice";
import { Button } from "../../components/helperFunc/Button";
import { favoriteAction } from "../favorite/favoriteRecipeSlice";
import './allrecipe.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allRecipeFromSlice } from "./allRecipesSlice";
import {selectFilterAllRecipes} from './allRecipesSlice';

const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg'

function AllRecipes(props) {
    // const {allRecipes, dispatch} = props;
    const dispatch = useDispatch()
    const allRecipes = useSelector(selectFilterAllRecipes)

    
    const getData = ()=>{
        dispatch(loadData())
    }

    useEffect(getData,[])

    const onHandleRecipe = (recipe)=>{
        dispatch(favoriteAction(recipe))
    }


    return(
        <div className="recipes_container">
            
        {   
            allRecipes.map((recipe)=>   
            <Recipes recipe={recipe} key={recipe.id}>
                <Button onHandleClick={()=>onHandleRecipe(recipe)} icon={favoriteIconURL }>
                    Add to Favorite
                </Button>
            </Recipes>
        
        
        
        ) 
        }

        </div>
    )
}

export default AllRecipes;