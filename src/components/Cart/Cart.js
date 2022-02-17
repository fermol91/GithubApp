import { useCartContext } from "../../context/CartContext"
import CartItem from "./CartItem/CartItem";
import CartEmpty from "./CartEmpty/CartEmpty";

function Cart() {

    const { cartList } = useCartContext()

    return (
        <>
            {cartList.length === 0 ? (
                <CartEmpty />
            ) : (
                <CartItem />
            )}
        </>
    );
};

export default Cart;
