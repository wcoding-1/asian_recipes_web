
import {favoriteRecipeReducer} from '../features/favorite/favoriteRecipeSlice';
import {searchTermReducer} from '../features/search/searchTermSlice';
import { allRecipesReducer } from '../features/allRecipe/allRecipesSlice';
import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  
    favoriteRecipe: favoriteRecipeReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer

});

const store = createStore(rootReducer);

export default store

