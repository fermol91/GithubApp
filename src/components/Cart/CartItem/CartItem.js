import { useCartContext } from "../../Context/Context"
//import { Link } from "react-router-dom"
import CartSummary from './../CartSummary/CartSummary';


function CartItem() {

    const { emptyCart, totalPrice } = useCartContext()

    return (
        <div className="cart">
            <CartSummary />
            <div className="finalCart">
                <p className="priceTotal">Precio total ${totalPrice()} </p>
                
                    <button>Comprar</button>
                
                <button onClick={emptyCart}>Vaciar carrito</button>
            </div>                      
        </div>
    );
}

export default CartItem;