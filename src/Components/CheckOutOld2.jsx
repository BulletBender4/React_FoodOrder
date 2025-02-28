import Modal from '../UI/Modal.jsx'
import { use } from 'react';
import CartContext from '../Store/CartContext.jsx'
import { currencyFormatter } from '../utility/currencyFormatter.js';
import Input from '../UI/Input.jsx';
import UserContext from '../Store/UserProgressContext.jsx'
import Buttons from '../UI/Buttons.jsx';
import useHTTP from '../Hooks/useHTTP.jsx';


const configValues = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function CheckOut() {
    const cartCtx = use(CartContext);
    const userProgressCtx = use(UserContext);
    const { isLoading, data, error, fetchingData, clearData } = useHTTP('http://localhost:3000/orders', configValues, null);
    let totalPrice = cartCtx.items.reduce((totalAmt, item) => { return totalAmt + item.quantity * item.price }, 0);

    function handleHideCheckout() {
        userProgressCtx.hideCheckout();
    }

    async function checkoutFormAction(formData) {
        const userEnteredData = Object.fromEntries(formData.entries());

        fetchingData(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: userEnteredData
            }
        })
        );
    }

    function handleUserConfirmation() {
        userProgressCtx.hideCheckout();
        cartCtx.reset();
        clearData();
    }


    let actions = (<>
        <Buttons textOnly type="button" onClick={handleHideCheckout}>close</Buttons>
        <Buttons >Submit</Buttons></>
    )

    if (isLoading) {
        actions = <span>Form is submitting...</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleUserConfirmation}>
            <h2>Success!</h2>
            <p> Your order was submitted successfully.</p>
            <p> We will get back to you with more details via email within the next few minutes.</p>
            <p className='modal-actions'></p>
            <Buttons onClick={handleUserConfirmation}>Okay</Buttons>
        </Modal>

    }


    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleHideCheckout}>
            <form action={checkoutFormAction}>
                <h2>Checkout</h2>
                <p>TotalAmount : {currencyFormatter.format(totalPrice)}</p>
                <Input label="Full Name" id="name" type="text"></Input>
                <Input label="E-Mail Address" id="email" type="email"></Input>
                <Input label="Street" id="street" type="text"></Input>
                <div className='control-row'>
                    <Input label="Postal Code" id="postal-code" type="text"></Input>
                    <Input label="City" id="city" type="text"></Input>
                </div>
                <p className='modal-actions'> {actions} </p>
            </form>
        </Modal>
    )
}