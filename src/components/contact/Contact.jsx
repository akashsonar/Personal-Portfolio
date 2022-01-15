import React, {useState} from "react";
import "./contact.scss";

export default function Contact() {

    const [message,
        setMessage] = useState(false);

    function handleSubmit(x) {
        x.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                    {message && <span>Thanks!! I will reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}