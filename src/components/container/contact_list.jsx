import React, { useState } from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/contact";
import { Contact } from "../../models/contact.class";
import ContactForm from "../pure/forms/contactForm";

const ContactListComponent = () => {
    const newContact1 = new Contact(
        "César",
        "Freydell",
        "cfreydell@gmail.com",
        true
    );

    const newContact2 = new Contact(
        "Paula",
        "Dávila",
        "pauda@outlook.com",
        false
    );

    const newContact3 = new Contact(
        "Pedro",
        "Coral",
        "pedrito.coral@gmail.com",
        true
    );

    const [contacts, setContacts] = useState([
        newContact1,
        newContact2,
        newContact3,
    ]);

    function contactStatus(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected;
        setContacts(tempContact);
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index, 1);
        setContacts(tempContact);
    }

    function addContact(contact) {
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }

    return (
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3 text-center">
                    <h5>Your Contacts</h5>
                </div>
                <div
                    className="card-body"
                    style={{ position: "relative", high: "400px" }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="text-center ps-2 pe-2"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="text-center ps-2 pe-2"
                                >
                                    Lastname
                                </th>
                                <th
                                    scope="col"
                                    className="text-center ps-2 pe-2"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="text-center ps-2 pe-2"
                                >
                                    State
                                </th>
                                <th
                                    scope="col"
                                    className="text-center ps-2 pe-2"
                                >
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => (
                                <ContactComponent
                                    key={index}
                                    contact={contact}
                                    conected={contactStatus}
                                    remove={deleteContact}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ContactForm add={addContact} />
        </div>
    );
};

ContactListComponent.propTypes = {};

export default ContactListComponent;
