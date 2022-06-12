import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalContext from "../../components/global/globalContext";

export default function CartProducts(props) {
    const { name, price, product_id, qty } = props.product
    const setTotalPrice = props.setTotalPrice
    let totalPrice = props.totalPrice
    const { subCountProduct } = props
    const data = useContext(GlobalContext);
    const removeFromCart = data.removeFromCart
    const addCountProduct = data.addCountProduct
    const removeCountProduct = data.removeCountProduct
    let navigate = useNavigate();

    const productsPrice = qty * price;
    

    return (
        <div className="product-container">
            <div className="name-box">{name}</div>
            <div className="inventory-box">{qty}</div>
            <div className="btns-box gap-btn">
                <div onClick={() => removeCountProduct(product_id)} className="btn">-</div>
                <div onClick={() => addCountProduct(product_id)} className="btn">+</div>
                <button onClick={() => removeFromCart(product_id)} className="btn-send"><img className="btn-img-trash" src="https://cdn-icons-png.flaticon.com/512/126/126468.png" alt="trash"></img></button>
            </div>
            <div className="price-box">R${productsPrice}</div>
        </div>
    )
}