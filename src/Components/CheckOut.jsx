import Modal from '../UI/Modal.jsx'
import { use } from 'react';
import CartContext from '../Store/CartContext.jsx'
import { currencyFormatter } from '../utility/currencyFormatter.js';
import Input from '../UI/Input.jsx';
import UserContext from '../Store/UserProgressContext.jsx'
import Buttons from '../UI/Buttons.jsx';

export default function CheckOut() {
    const cartCtx = use(CartContext);
    const userProgressCtx = use(UserContext);
    let totalPrice = cartCtx.items.reduce((totalAmt, item) => { return totalAmt + item.quantity * item.price }, 0);

    function handleHideCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleFormData(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const userEnteredData = Object.fromEntries(fd.entries());

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: userEnteredData
                }
            })
        })
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleHideCheckout}>
            <form onSubmit={(event) => handleFormData(event)}>
                <h2>Checkout</h2>
                <p>TotalAmount : {currencyFormatter.format(totalPrice)}</p>
                <Input label="Full Name" id="name" type="text"></Input>
                <Input label="E-Mail Address" id="email" type="email"></Input>
                <Input label="Street" id="street" type="text"></Input>
                <div className='control-row'>
                    <Input label="Postal Code" id="postal-code" type="text"></Input>
                    <Input label="City" id="city" type="text"></Input>
                </div>
                <Buttons textOnly type="button" onClick={handleHideCheckout}>close</Buttons>
                <Buttons >Submit</Buttons>
            </form>
        </Modal>
    )
}