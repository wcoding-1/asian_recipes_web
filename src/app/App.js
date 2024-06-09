import AllRecipes from '../features/allRecipe/AllRecipes';
import SearchTerm from '../features/search/SearchTerm';
import FavoriteRecipe from '../features/favorite/FavoriteRecipe';

function App({state, dispatch}) {
    // const allRecipe = allRecipeSearch(state.allRecipes, state.searchTerm);
    // const favorite = allRecipeSearch(state.favoriteRecipe, state.searchTerm)
    return(
        <>
          <SearchTerm/>
        <FavoriteRecipe/>
        <AllRecipes/>
        {/* <SearchTerm searchTerms={state.searchTerm} dispatch={dispatch}/>
        <FavoriteRecipe favoriteRecipe={favorite} dispatch={dispatch}/>
        <AllRecipes allRecipes={allRecipe} dispatch={dispatch}/> */}

        </>
    )


    // function allRecipeSearch(recipes, search){
    //     return recipes.filter((recipe)=> recipe.name.toLowerCase().includes(search.toLowerCase()))
    //}
}

export default App;

