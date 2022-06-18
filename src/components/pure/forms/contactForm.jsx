import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ add }) => {
    const nameRef = useRef("");
    const lastnameRef = useRef("");
    const emailRef = useRef("");

    function submitContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            emailRef.current.value,
            true
        );
        add(newContact);
        nameRef.current.value = "";
        lastnameRef.current.value = "";
        emailRef.current.value = "";
    }

    return (
        <form
            onSubmit={submitContact}
            className="d-flex justify-content-center align-items-center"
        >
            <div className="form-outline flex-fill">
                <input
                    type="text"
                    ref={nameRef}
                    id="inputName"
                    placeholder="Insert a name"
                    className="form-control form-control-lg"
                    required
                    autoFocus
                />
                <input
                    type="text"
                    ref={lastnameRef}
                    id="inputLastName"
                    placeholder="Insert a lastname"
                    className="form-control form-control-lg"
                    required
                />
                <input
                    type="text"
                    ref={emailRef}
                    id="inputEmail"
                    placeholder="Insert an email"
                    className="form-control form-control-lg"
                    required
                />
                <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactForm;
