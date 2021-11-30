//dito nakaploob kung nagloloading pages or hindi

import * as actionTypes from "../types"

const initialState ={
    isDarkMode: false,
    lang: "en",
};
function uiReducer(state = initialState,action){
    switch(action.type){
        case action.SET_THEME:   //niche -change ung theme
            return{
                ...state,
                isDarkMode: action.payload,
            };
        case action.SET_LANG:   //niche -change ung language
            return{
                ...state,
                lang: action.payload,
            };
            default:
                return{
                    ...state,
                };
    }
}
export default uiReducer;