import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import Notification from "./components/Notification";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contatcts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    if (this.isContactExist(name)) alert(`${name} is already in contacts`);
    else if (name === "" || number === "") return;
    else this.addNewContact({ name, number });
  };

  isContactExist = (name) => {
    return this.state.contacts.find((contact) => contact.name === name);
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  handleFiltering = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContactsForRender = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return filter.length > 0
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;
  };

  render() {
    const { contacts } = this.state;
    const contactsFprRender = this.getContactsForRender();
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Container>
        {contacts.length > 0 ? (
          <Container title="Contacts">
            <Filter onChange={this.handleFiltering} />
            <ContactsList
              contacts={contactsFprRender}
              onDelete={this.deleteContact}
            />
          </Container>
        ) : (
          <Notification message="No contacts here yet..." />
        )}
      </div>
    );
  }
}

export default App;
