const increment = () => ({
    type: "INCREMENT"
});

const decrement = () => ({
    type: "DECREMENT"
});

const islogged = () => ({
    type: "islogged"
});

const addAmount = (amount) => ({
    type: "addAmount",
    amount: amount
});

export { increment, decrement, islogged, addAmount };