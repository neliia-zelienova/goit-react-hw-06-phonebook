import React from "react";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import Container from "./Container/Container";

class PhoneBook extends React.Component {

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   if (contacts) {
  //     this.setState({ contacts: JSON.parse(contacts) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contatcts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm />
        </Container>
        {/* {contacts.length > 0 ? ( */}
        <Container title="Contacts">
          <Filter />
          <ContactsList />
        </Container>
        {/* ) : (
          <Notification message="No contacts here yet..." />
        )} */}
      </div>
    );
  }
}

export default PhoneBook;
