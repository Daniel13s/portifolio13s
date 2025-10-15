import logo from "../../../../public/logo biel.svg"

import "./style.css"

export default function Footer() {
    const logoDaniel = logo.src
    return (
        <div className="footer">
            <p>©Daniel Silva Cardoso</p>
            <div className="line"></div>
            <img src={logoDaniel} alt="" />
        </div>
    )
}