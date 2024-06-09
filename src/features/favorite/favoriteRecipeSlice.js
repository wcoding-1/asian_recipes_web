import { createSlice } from "@reduxjs/toolkit";

export const favoriteAction = (recipe)=>{
    return {
        type:'favoriteRecipe/addFavoriteRecipe',
        payload: recipe
    }
}

export const removeFavoriteAction = (selete)=>{
    return {
        type:'favoriteRecipe/removeFavorite',
        payload: selete
    }
}


const initialFavorite = [];
export const favoriteRecipeReducer = (favorites = initialFavorite, action)=>{
    switch (action.type) {
        case 'favoriteRecipe/addFavoriteRecipe':
            return [...favorites, action.payload]

        
            
        case 'favoriteRecipe/removeFavorite':
            return favorites.filter((favorite)=>favorite.id !== action.payload.id)
    
        default:
            return favorites;
    }

}


export const favoriteFromSlice = (state)=> state.favoriteRecipe; 