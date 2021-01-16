
const initialState = {
    counter: 0,
    islogged: false
};

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            };

        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            };

        case 'islogged': 
            return {
                ...state,
                islogged: !state.islogged
            };

        default:
            return state
    }
};

export default reducer;