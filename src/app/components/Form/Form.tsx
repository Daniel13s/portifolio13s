'use client'

import { useContext, useState } from "react"
import { MdEmail } from "react-icons/md"
import "./style.css"
import themeContext from "@/app/context/ThemeContext"
import { CgSpinner } from "react-icons/cg"
import { FaSpinner } from "react-icons/fa"
import { ImSpinner } from "react-icons/im"

export default function Form() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const {theme} = useContext(themeContext)

    async function sendEmail() {
        setLoading(true)
        await fetch('/api/send-email', {
            method: "POST",
            body: JSON.stringify({
                email,
                name,
                message
            })
        })
        setLoading(false)
    }
    return (
        <div className="contato">
            <h2>Contato</h2>
            <input style={{borderColor: theme === "light" ? "black" : "white"}} type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)} />
            <input style={{borderColor: theme === "light" ? "black" : "white"}} type="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} />
            <input style={{borderColor: theme === "light" ? "black" : "white"}} type="text" placeholder="Digite oque desejar" onChange={e => setMessage(e.target.value)} />

            <button style={{backgroundColor: theme === "dark" ? "white" : "black"}} onClick={sendEmail}>{loading ? <div className="loadingSpinner">
                <CgSpinner color={theme === "light" ? "white" : "black"} />
            </div> : <MdEmail color={theme === "light" ? "white" : "black"} />}</button>
        </div>
    )
}
