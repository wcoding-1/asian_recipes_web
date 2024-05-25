
import allRecipesData from "../../data";


export const loadData = ()=>{
    return{
        type:'allRecipes/loadData',
        payload: allRecipesData
    }
}

const initialRecipes = []
export const allRecipesReducer = (state=initialRecipes, action) =>{
    switch (action.type) {

        case 'allRecipes/loadData':
            return action.payload;
        
        // case 'allRecipes/addRecipes':
        //     return [...state, action.payload];

        default:
            return state;
    }

}

