import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import "../../styles/styles.scss";

const ContactComponent = ({ contact, conected, remove }) => {
    function contactStatusBadge() {
        if (contact.conected) {
            return (
                <i
                    onClick={() => conected(contact)}
                    className="bi-toggle-on contact-action"
                    style={{ color: "green" }}
                />
            );
        } else {
            return (
                <i
                    onClick={() => conected(contact)}
                    className="bi-toggle-off contact-action"
                    style={{ color: "grey" }}
                />
            );
        }
    }
    return (
        <tr className="fw-mormal">
            <th className="text-center">
                <span>{contact.name}</span>
            </th>
            <td className="text-center">
                <span className="align-middle">{contact.lastName}</span>
            </td>
            <td className="text-center">
                <span className="align-middle">{contact.email}</span>
            </td>
            <td className="text-center">
                <span className="align-middler">{contactStatusBadge()}</span>
            </td>
            <td className="text-center">
                <span>
                    <i
                        onClick={() => remove(contact)}
                        className="bi-trash contact-action"
                        style={{ color: "tomato" }}
                    />
                </span>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ContactComponent;
