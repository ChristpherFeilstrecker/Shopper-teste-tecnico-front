import { useEffect, useContext, useState } from "react";
import GlobalContext from "../../components/global/globalContext";
import useForm from "../../components/hooks/useForm";
import CartProducts from "./CartProducts";
import UseNewRequest from "../../components/hooks/useNewRequest";
import "./StyledCartPage.css";

export default function CartPage(props) {
    const data = useContext(GlobalContext);
    const cart = data.cart
    const productsStock = data.products;
    const refreshProduct = data.refreshProduct;
    const setCart = data.setCart
    const totalPrice = data.total
    const [form, onChange, clear] = useForm({ name: "", date: "" })

    const products = cart
        .map((product) => {
            return <CartProducts key={product.product_id} product={product} />
        })

    const newRequest = (() => {

        const request = {
            "name": form.name,
            "date": form.date,
            "products": cart
        }

        var actualDate = new Date();
        var actualDay = parseInt(String(actualDate.getDate()).padStart(2, '0'));
        var actualMonth = parseInt(String(actualDate.getMonth() + 1).padStart(2, '0'));
        var actualYear = actualDate.getFullYear();

        const dateRequest = form.date.split("-");
        var daySent = parseInt(dateRequest[2])
        var monthSent = parseInt(dateRequest[1])
        var yearSent = parseInt(dateRequest[0])

        if (form.name === '' || form.date === '') {
            alert("Necessário informar seu nome e data para entrega")
        } else if (cart.length === 0) {
            alert("Seu pedido deve ter ao menos um produto")
        } else if (yearSent < actualYear) {
            alert("Ano não pode ser anterior ao atual");
        } else if (yearSent === actualYear && monthSent < actualMonth) {
            alert("Mês não pode ser anterior ao atual");
        } else if (yearSent === actualYear && monthSent === actualMonth && daySent < actualDay) {
            alert("Dia não pode ser anterior ao atual");
        } else {

            for (const productCart of cart) {

                const indexProduct = productsStock.findIndex((i) => productCart.product_id === i.id)
                console.log("pegou qtd estoque", productsStock[indexProduct].qty_stock)

                const newQtyStok = productCart.qty

                if (productsStock[indexProduct].qty_stock < productCart.qty) {
                    alert(`Quantidade insuficiente- ${productCart.name}`)
                    return "quantidade insuficiente"
                }
            }

            for (const productCart of cart) {

                const indexProduct = productsStock.findIndex((i) => productCart.product_id === i.id)
                console.log("pegou qtd estoque", productsStock[indexProduct].qty_stock)

                const newQtyStok =productsStock[indexProduct].qty_stock - productCart.qty
                productsStock[indexProduct].qty_stock = newQtyStok

            }

            UseNewRequest(request)
            clear()
            setCart([])
            alert("Pedido realizado")
        }
    })

    return (
        <div className="cart-page">
            <div className="body-intro-container">
                <div>CARRINHO</div>
                <div className="products-container products-cart">
                    <div className="title-container">
                        <div className="name-box">Nome</div>
                        <div className="inventory-box">QTD</div>
                        <div className="btns-box"></div>
                        <div className="price-box">Valor</div>
                    </div>

                    {products}


                    <div className="total-price-container">
                        <div className="btns-box">Total</div>
                        <div className="price-box">{totalPrice}</div>
                    </div>
                </div>
                <div className="request">SOLICITAR PEDIDO</div>
                <div className="products-container products-cart">
                    <div className="request-container">

                        <form className="form-container-box-contact-section-2">

                            <div className="form-container-contact-section-2">
                                <div className="form-personal-data-container-contact-section-2">
                                    <input
                                        placeholder={"Seu nome*"}
                                        type='name'
                                        name="name"
                                        value={form.name}
                                        onChange={onChange}
                                        required
                                    />
                                    <input
                                        placeholder={"Data de entrega*"}
                                        type='date'
                                        name="date"
                                        value={form.date}
                                        onChange={onChange}
                                        required
                                    />
                                </div>

                                <div className="form-btn-container-contact-section-2">
                                    <div className="btns-send-container-contact-section-2">
                                        <input type="hidden" name="_captcha" value="false" />
                                        <button onClick={() => newRequest()} className="btn-send-email efect-btn">ENVIAR</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}