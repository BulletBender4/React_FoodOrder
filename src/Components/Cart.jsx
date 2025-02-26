import { use, useEffect } from "react";
import Modal from "../UI/Modal";
import CartContext from '../Store/CartContext.jsx'
import UserContext from '../Store/UserProgressContext.jsx'
import Buttons from "../UI/Buttons.jsx";
import { currencyFormatter } from "../utility/currencyFormatter.js";
import CartItem from "./CartItem.jsx";



export default function Cart() {

    const cartCtx = use(CartContext);
    const userProgressCtx = use(UserContext);

    let totalPrice = cartCtx.items.reduce((totalAmt, item) => { return totalAmt + item.quantity * item.price }, 0);

    function handleHideCart() {
        userProgressCtx.hideCart();
    }

    function handleCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleHideCart : null}>
            <h2>Your cart</h2>
            <ul>
                {cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} quantity={item.quantity}
                    price={item.price} onIncrement={() => cartCtx.addItem(item)} onDecrement={() => cartCtx.deleteItem(item.id)}></CartItem>)}
            </ul>
            <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
            <p className="modal-actions">
                <Buttons textOnly onClick={handleHideCart} type="button">Close</Buttons>
                {cartCtx.items.length > 0 && <Buttons onClick={handleCheckout}>Go to Checkout</Buttons>}
            </p>
        </Modal>
    )
}