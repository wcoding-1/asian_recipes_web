
export const searchTermAction = (term)=>{
    return{
        type:'searchTerm/setSearchTerm',
        payload:term
    }
}

export const RemoveTermAction = ()=>{
    return{
        type:'searchTerm/removeSearchTerm',
        payload:''
    }
}

const initialSearchTerm = '';
export const searchTermReducer = (state=initialSearchTerm, action)=>{
    switch(action.type){
        case 'searchTerm/setSearchTerm':{
            return action.payload
        }

        case 'searchTerm/removeSearchTerm':{
            return action.payload;
        }

        default:
            return state

    }

}


export const selectSearchTerm = (state)=> state.searchTerm;