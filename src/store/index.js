import {createStore } from 'redux';

// iniializing redux state
const initialState =[]
// Reducer function
const reducerFn = (state = initialState,action)=>{
    switch(action.type){
        case 'GETCONTACTS' :
            return action.payload;
        case 'DELETECONTACTS':
            const updatedContacts = state.filter((contact)=>contact.id !== action.payload && contact)
            return updatedContacts; 
        case 'UPDATECONTACTS':
            const newData = state.map((contact)=>contact.id === action.payload.id ? action.payload:contact );
            state =newData;
            return state;
        case 'ADDCONTACTS':
            return [...state,action.payload];
        default:
                return state;
    }

}

const store = createStore(reducerFn);
// exporting the redux store
export default store;
