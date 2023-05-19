export const initialState = {
    basket: [],
    user: null
}

//Selector
//This didn't work
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
            const updatedBasket = state.basket.filter(
                (item) => item.id !== action.payload
            );
            return {
                ...state,
                basket: updatedBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        default: return state;
    }
}

export default reducer;