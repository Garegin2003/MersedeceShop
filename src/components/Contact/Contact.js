import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactTitle from "../ContactTitle/ContactTitle";
import './Contact.css'

function Contact() {
    return(
        <section className="contact">
            <ContactTitle />
            <ContactForm />
        </section>
    )
}

export default Contact