const increment = () => ({
    type: "increment"
});

const decrement = () => ({
    type: "decrement"
});

const islogged = () => ({
    type: "islogged"
});

const addAmount = (amount) => ({
    type: "addAmount",
    amount: amount
});

export { increment, decrement, islogged, addAmount };