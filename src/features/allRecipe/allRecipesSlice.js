
import allRecipesData from "../../data";
import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchTermSlice";


// export const loadData = ()=>{
//     return{
//         type:'allRecipes/loadData',
//         payload: allRecipesData
//     }
// }

const initialRecipes = []
// export const allRecipesReducer = (state=initialRecipes, action) =>{
//     switch (action.type) {

//         case 'allRecipes/loadData':
//             return action.payload;
        
//         // case 'allRecipes/addRecipes':
//         //     return [...state, action.payload];

//         default:
//             return state;
//     }

// }

const allRecipesSlice =  createSlice({
    name:'allrecipes',
    initialState:[],
    reducers:{
        loadData:(state, action)=> allRecipesData
    }

});


export const loadData = allRecipesSlice.actions.loadData;

export const allRecipesReducer = allRecipesSlice.reducer;

export const allRecipeFromSlice = (state) => state.allRecipes


export const selectFilterAllRecipes =(state)=>{
  const allRecipes = allRecipeFromSlice(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe)=> recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}




