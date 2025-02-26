import Cart from "./Components/Cart.jsx";
import CheckOut from "./Components/Checkout.jsx";


import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from './Store/CartContext.jsx';
import { UserProgressContextProvider } from './Store/UserProgressContext.jsx';
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
