import { useState, useContext, createContext } from "react";


const CartContext = createContext([])

export function useCartContext () {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    function addToCart (items) {

        const indice = cartList.findIndex(i => i.id === items.id)

        if (indice > -1) {

            const oldQuantity = cartList[indice].quantity
            let newQuantity = oldQuantity + items.quantity
            cartList[indice].quantity = newQuantity
            let arrAux = [...cartList]
            setCartList(arrAux)

        }else{
            setCartList([...cartList, items])
        }
    }

    const deleteItem = (id) => {

        setCartList(cartList.filter((product) => product.id !== id));
    }

    const emptyCart = () => {
        setCartList([])
    }

    const totalPrice = () => {
        let total = 0
        cartList.forEach((product) => {
            total += product.price * product.quantity;
        });

        return total;
    }

    const quantityItems = () => {
        return cartList.reduce((prev, curr) => prev = prev + curr.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            deleteItem,
            emptyCart,
            totalPrice,
            quantityItems
        }}>
            {children}
        </CartContext.Provider>
    )
}