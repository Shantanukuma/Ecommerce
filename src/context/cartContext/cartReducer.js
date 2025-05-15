export const cartReducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        console.log("Incremented");  
    } else{
        return state;
    }
}


