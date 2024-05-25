import { createSlice } from "@reduxjs/toolkit";

export const favoriteAction = (recipe)=>{
    return {
        type:'favoriteRecipe/addFavoriteRecipe',
        payload: recipe
    }
}

export const removeFavoriteAction = (recipe)=>{
    return {
        type:'favoriteRecipe/removeFavorite',
        payload: ''
    }
}




const initialFavorite = [];
export const favoriteRecipeReducer = (favorites = initialFavorite, action)=>{
    switch (action.type) {
        case 'favoriteRecipe/addFavoriteRecipe':{
            return [...favorites, action.payload]

        }
            
        case 'favoriteRecipe/removeFavorite':{
            return favorites.filter((favorite)=>favorite.id !== action.payload.id
             
             )
        }
        default:
            return favorites;
    }

}
