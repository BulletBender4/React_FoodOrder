import { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
})


function cartReducer(state, action) {

    if (action.type === "ADD_ITEM") {

        if (action.type === 'ADD_ITEM') {
            const updatedItem = [...state.items]
            const existingItemIndex = updatedItem.findIndex((item) => item.id === action.payload.item.id);
            const existingItem = updatedItem[existingItemIndex];

            if (existingItemIndex > -1) {
                const updatedExistingItem = { ...existingItem, quantity: existingItem.quantity + 1 };
                updatedItem[existingItemIndex] = updatedExistingItem;
            }
            else {
                updatedItem.push({ ...action.payload.item, quantity: 1 });
            }
            return { ...state, items: updatedItem }
        }

        return { ...state, items: updatedItem }
    }



    if (action.type === "REMOVE_ITEM") {
        let updatedItem = [...state.items]
        const existingDelItemIndex = updatedItem.findIndex((item) => item.id === action.payload.id);
        const existingDelItem = updatedItem[existingDelItemIndex];

        if (existingDelItem.quantity === 1) {
            updatedItem = updatedItem.filter((item) => item.id !== action.payload.id);
            // updateDeleteItem = updateDeleteItem.splice(exisitingDeleteItemIndex, 1)
        } else {
            const updatedDeletedItemQty = { ...existingDelItem, quantity: existingDelItem.quantity - 1 };
            updatedItem[existingDelItemIndex] = updatedDeletedItemQty;
        }
        return { ...state, items: updatedItem }
    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartFunc] = useReducer(cartReducer, { items: [] });
    function addItem(item) {
        dispatchCartFunc({ type: 'ADD_ITEM', payload: { item } })
    }

    function deleteItem(id) {
        dispatchCartFunc({ type: 'REMOVE_ITEM', payload: { id } })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        deleteItem
    }

    return (
        <>
            <CartContext value={cartContext}>
                {children}
            </CartContext>
        </>
    )
}

export default CartContext;