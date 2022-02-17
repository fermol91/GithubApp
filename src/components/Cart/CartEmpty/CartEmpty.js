import { Link } from "react-router-dom"



function CartEmpty() {
  return(
    <div className="cartEmpty">
        <h2>Su carrito se encuentra vacío</h2>
        <Link to="/">
            <button variant="dark">Ir a la tienda</button>
        </Link>
    </div>
  );
}

export default CartEmpty;
