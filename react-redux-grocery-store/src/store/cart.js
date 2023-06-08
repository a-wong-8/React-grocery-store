const ADD = 'ADD';
const SHOW = 'SHOW';
const REMOVE = 'REMOVE';

export const cartReducer = (state={},action) => {
    const newState = Object.assign({},state);
    switch(action.type){
        case(ADD):
            newState[action.newItem.id] = action.newItem;
            return newState;
        case(REMOVE):
            delete newState[action.itemId]
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

export const cartRemove = (itemId) => ({
    type: REMOVE,
    itemId
})