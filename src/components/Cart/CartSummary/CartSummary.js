import './CartSummary.css'
//import { Table } from "react-bootstrap";
import CartWidget from '../CartWidget/CartWidget';
import { useCartContext } from "../../../context/CartContext"


function CartSummary() {

    const { cartList, deleteItem } = useCartContext()

    return(
        <div>
            <table striped bordered hover>
                <thead>
                    <tr>
                    <th>Imagen</th>
                    <th>useructo</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Remover</th>
                    </tr>
                </thead>
                {cartList.map((user) =>
                <tbody key={user.id}>
                    <tr>
                    <td><img src={user.img} alt={user.name} /></td>
                    <td>{user.name}</td>
                    <td>{user.quantity}</td>
                    <td>${user.price}</td>
                    <td>${user.price * user.quantity}</td>
                    <td>
                        <button onClick={() => deleteItem(user.id)} className="buttonTrashWidget">
                            <CartWidget />
                        </button>
                    </td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    );
}

export default CartSummary;
