import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../components/hooks/useForm";

export default function CardProducts(props) {
    const { id, name, price, qty_stock } = props.product
    const setCart = props.setCart
    const cart = props.cart

    const [form, onChange, clear] = useForm({ quantity: 0 })

    const addProductToCart = (() => {

        const newProduct = {
            product_id: id,
            name: name,
            price: price,
            qty: form.quantity
        }

        if (form.quantity > qty_stock) {
            alert("Quantidade solicitada insuficiente no estoque")

        } else {
            const newCart = [...cart, newProduct]
            setCart(newCart)
            clear()
            alert("producto adicionado ao carrinho")
        }

    })


    useEffect(() => {
        setTimeout(() => {

        }, 1500)
    }, [])

    return (
        <div className="product-container">
            <div className="name-box">{name}</div>
            <div className="inventory-box">{qty_stock}</div>
            <div className="btns-box">

                <form className="form-box">
                    <div className="qtd">
                        <input
                            className="qtd-input"
                            placeholder={"0"}
                            type='quantity'
                            name="quantity"
                            value={form.quantity}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button onClick={() => addProductToCart()} className="btn-send"><img className="btn-img-cart" src="https://cdn-icons-png.flaticon.com/512/2228/2228808.png" alt="addcart"></img></button>
                </form>
            </div>
            <div className="price-box">R${price}</div>
        </div>
    )
}