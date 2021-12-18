
import {
    ADD_NEW_CATEGORY
} from '../redux.constants';

export const DEF_CAT = ['FAVOURITES','LANDSCAPE','ABSTRACT','PORTRAIT'];

const initialState = {
    categoriesList: DEF_CAT,
    catStore:{
        LANDSCAPE:[],
        ABSTRACT:[],
        PORTRAIT:[],
        FAVOURITES:[]
    },
}

const  categoryReducer = (state = initialState,action) =>{
    const {type,payload} = action;
    switch(type){

    case ADD_NEW_CATEGORY:
        {
            const newCat = [...state.categoriesList,payload];
            return {
                ...state,
                categoriesList:newCat,
                catStore:{
                    ...state.catStore,
                    [payload]:[]
                }
            }
        }

    default:
        return state;
    }
};

export default categoryReducer;