import "./contact.scss"
import {useState} from 'react'


export default function Contact(){

    const [message,setMessge]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessge(true)
    }
    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Email address" />
                    <textarea placeholder="Enter your Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
        )
}