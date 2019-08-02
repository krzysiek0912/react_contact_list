import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <form className="contactForm">
        <input
          name="firstName"
          type="text"
          placeholder="Imię"
          value={firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Nazwisko"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <button type="submit">Dodaj kontakt</button>
      </form>
    );
  }
}
export default ContactForm;
