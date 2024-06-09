import {React} from 'react'
import {favoriteFromSlice, removeFavoriteAction , favoriteAction} from './favoriteRecipeSlice';
import Recipes from '../../components/helperFunc/Recipes'
import { Button } from '../../components/helperFunc/Button';
import './favorite.css';
import { useSelector,useDispatch } from 'react-redux';
// import { favoriteFromSlice } from './favoriteRecipeSlice';
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'


// {favoriteRecipe,  onHandleClick, dispatch}
function FavoriteRecipe() {
    const favoriteRecipe = useSelector(favoriteFromSlice)
    const dispatch = useDispatch()
    const onRemoveRecipeHandler = (recipe) => {
        // Dispatch a removeRecipe() action.
        //   dispatch(removeFavoriteAction(recipe))
      
        dispatch(removeFavoriteAction(recipe));
    
      };
    return(
        <div className='favorite_container'>
            <h3>Favorite Recipe</h3>
            {favoriteRecipe.map(favoriteRecipeCompunent)}
        </div>
    );

    function favoriteRecipeCompunent(recipe){
         
           return (
                <Recipes recipe={recipe} key={recipe.id}>
                    <Button onHandleClick={()=>onRemoveRecipeHandler(recipe)} icon={unfavoriteIconUrl}>
                        Remove Favorite
                    </Button>
                </Recipes>
            
           )
    
        
     };
}



 export default FavoriteRecipe;
