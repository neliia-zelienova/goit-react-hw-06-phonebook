import React from "react";
import { connect } from "react-redux";
import styles from "./Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="" className={styles.form__label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={styles.form__input}
      ></input>
    </label>
  );
};
const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
