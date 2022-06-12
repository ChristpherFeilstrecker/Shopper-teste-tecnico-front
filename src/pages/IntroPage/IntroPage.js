import { useContext, useEffect, useState } from "react";
import CardProducts from "./CardProducts";
import GlobalContext from "../../components/global/globalContext";
import "./StyledIntroPage.css";

export default function IntroPage() {
    const data = useContext(GlobalContext);
    const products = data.products;
    const cart = data.cart;
    const setCart = data.setCart;

    const listProducts = products && products
        .map((product) => {   
            return <CardProducts 
            key={product.id} 
            product={product}  
            setCart={setCart} 
            cart={cart}
            />
        })


    return (
        <div id="intro-page">
            <div className="body-intro-container">
                <div>PRODUTOS</div>
                <div className="products-container">
                <div className="title-container">
                <div className="name-box">Nome</div>
                <div className="inventory-box">Estoque</div>
                <div className="btns-box"></div> 
                 <div className="price-box">Preço</div>
                </div>

                {listProducts?<div>{listProducts}</div>: <div>...loading</div>}
                           
                </div>
            </div>
        </div>
    )
}