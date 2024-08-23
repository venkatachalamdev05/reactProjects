import { createStore, combineReducers } from "redux";


const initialState = {
    foodItems: []
}

export function addItemFromCart(cartItem) {
    return {
        type: "ADD_ITEM",
        payload: cartItem
    }
}

function reducer(state = initialState, action) {
    if (action.type == "ADD_ITEM") {        
        return {
            foodItems: action.payload
        }
    }
    return state
}

const rootReducer = combineReducers({
    food: reducer
})

export const foodDelivery = createStore(rootReducer);