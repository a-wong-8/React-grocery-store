const ADD = 'ADD'
const SHOW = 'SHOW'
export const cartReducer = (state={},action) => {
    const newState = Object.assign({},state);
    switch(action.type){
        case(ADD):
            newState[action.newItem.id] = action.newItem;
            return newState;
        default:
            return state;
    }
}


export const cartAdder = (newItem) =>({
    type: ADD,
    newItem
})

export const cartShow = (cart)=>({
    type: SHOW,
    cart
})