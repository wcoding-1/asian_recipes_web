import SearchTerm from '../features/search/SearchTerm';
import FavoriteRecipe from '../features/favorite/FavoriteRecipe';
import AllRecipes from '../features/allRecipe/AllRecipes'
import { increment } from '../state';
// import { decrement } from '../state';
import "./style.css";

function App(props) {
  const {state, dispatch} = props;
  const fineAllRecipe = fineFilterTerm(state.allRecipes, state.searchTerm);
  const fineFilterSearch = fineFilterTerm(state.favoriteRecipe)


  return (
   <div className='main'>
    <p>{}</p>
    <SearchTerm searchTerm={state.searchTerm}/>
    <FavoriteRecipe />
    <AllRecipes dispatch={dispatch} allRecipes={fineAllRecipe} />
   

   </div>
  );
}

export default App;


function fineFilterTerm (recipes, search){
  return recipes.filter((recipe)=> recipe.name.toLowerCase().includes(search.toLowerCase()));
}
