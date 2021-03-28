import React from "react";
import { connect } from "react-redux";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/contacts-actions";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.number) {
      this.props.onSubmit(this.state);
      this.resetForm();
    } else alert("No contact name or number!");
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className={styles.contact__form} onSubmit={this.handleSubmit}>
        <label className={styles.form__label}>
          Name
          <input
            className={styles.form__input}
            type="text"
            name="name"
            onChange={this.handleInput}
            value={this.state.name}
          ></input>
        </label>
        <label className={styles.form__label}>
          Number
          <input
            className={styles.form__input}
            type="text"
            name="number"
            onChange={this.handleInput}
            value={this.state.number}
          ></input>
        </label>
        <button type="submit" className={styles.form__submit__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { onSubmit: ({ name, number }) => dispatch(addContact(name, number)) };
};

export default connect(null, mapDispatchToProps)(ContactForm);
