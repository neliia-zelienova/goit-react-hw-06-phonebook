import React from "react";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import Container from "./Container/Container";

const PhoneBook = () => {
  return (
    <div className="App">
      <Container title="Phonebook">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactsList />
      </Container>
    </div>
  );
};

export default PhoneBook;
