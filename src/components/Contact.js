import React from "react";

class Contact extends React.Component {
  render() {
    const { firstName, lastName, email } = this.props.item;
    return (
      <div className="contactItem">
        <img
          src="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-21.jpg"
          alt=""
          className="contactImage"
        />
        <p className="contactLabel">{"Imię: " + firstName}</p>
        <p className="contactLabel">{"Nazwisko: " + lastName}</p>
        <a className="contactEmail" href={"mailto:" + email}>
          {email}
        </a>
      </div>
    );
  }
}

export default Contact;
