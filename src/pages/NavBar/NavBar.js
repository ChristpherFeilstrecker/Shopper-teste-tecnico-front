import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyledNavBar.css";


export default function NavBar() {
    let navigate = useNavigate();

    return (
        <header className="top-bar-container">
            <div className="nav-section">
                <div className="nav-buttons">
                    <div className="nav-button" onClick={() => navigate(`/`)}>PRODUTOS</div>
                    <div className="nav-button" onClick={() => navigate(`/carrinho`)}>CARRINHO</div>
                </div>
            </div>
        </header>
    )
}