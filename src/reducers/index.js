
const initialState = {
    counter: 0,
    islogged: false
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };

        case 'islogged': 
            return {
                ...state,
                islogged: !state.islogged
            };
            
        case 'addAmount':
            return {
                ...state,
                counter: action.amount
            }
        default:
            return state
    }
};

export default reducer;