import { useEffect, useState } from "react";
import UseRequestData from "../hooks/useRequestData";
import GlobalContext from "./globalContext";

export default function GlobalState(props) {
    const [cart, setCart] = useState([]);

    let total = 0;

    let products = UseRequestData(`https://shopper-api-challenge.herokuapp.com/shopper_challenge/products`)

    const removeFromCart = (item) => {
        const index = cart.findIndex((i) => item.id === i.id)
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const addCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.product_id)
        const indexProduct = products.findIndex((i) => id === i.id)

        if (newCart[index].qty >= products[indexProduct].qty_stock) {
            return newCart
        } else {
            const newQtd = Number(newCart[index].qty) + 1
            newCart[index].qty = newQtd
            setCart(newCart)
        }
    })

    const removeCountProduct = ((id) => {
        const newCart = [...cart]
        const index = newCart.findIndex((i) => id === i.product_id)

        if (newCart[index].qty === 1) {
            return newCart
        } else {
            const newQtd = Number(newCart[index].qty) - 1
            newCart[index].qty = newQtd
        }
        setCart(newCart)
    })

    const calculateTotalPrice = () => {
        for (let product of cart) {
            const caculateProducts = product.qty * product.price
            total += caculateProducts
        }
    }
    calculateTotalPrice()

    useEffect(() => {
        const data = localStorage.getItem('cart')
        if (data) {
            setCart(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const data = {
        products,
        cart,
        setCart,
        removeFromCart,
        addCountProduct,
        removeCountProduct,
        total
    }

    return (<GlobalContext.Provider value={data}>
        {props.children}
    </GlobalContext.Provider>
    )
}

