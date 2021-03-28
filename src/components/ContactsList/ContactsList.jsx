import React from "react";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contacts__list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.contacts__item}>
          <span className={styles.contacts__name}>{`${contact.name}:`}</span>
          <span className={styles.contacts__number}>{contact.number}</span>
          <button
            type="button"
            className={styles.contacts__delete__btn}
            onClick={() => onDelete(contact.id)}
          >
            
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
