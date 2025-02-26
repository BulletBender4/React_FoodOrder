import { useContext } from 'react';

import Buttons from "../UI/Buttons"
import logoImg from '../assets/logo.jpg';
import CartContext from '../Store/CartContext.jsx'
import UserContext from '../Store/UserProgressContext.jsx'

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Buttons textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Buttons>
            </nav>
        </header>
    );
}























// import logoimg from "../assets/logo.jpg"
// import Buttons from "../UI/Buttons"


// export default function Header() {
//     return (
//         <header id="main-header">
//             <div id="title">
//                 <img src={logoimg} alt="Logo of a resturant"></img>
//                 <h1>REACT FOOD</h1>
//             </div>

//             <nav>
//                 {/* <button>cart(0)</button> */}
//                 {/* custom Button component */}
//                 <Buttons textOnly>cart(0)</Buttons>
//             </nav>

//         </header>
//     )
// }