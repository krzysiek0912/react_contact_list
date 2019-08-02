import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    const contacts = this.props.items.map(function(contact) {
      return <Contact item={contact} key={contact.id} />;
    });

    return <ul className="contactsList">{contacts}</ul>;
  }
}
export default Contacts;
