import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="flex justify-between border-b-2 p-1">
      <div>
        {contact.firstName} {contact.lastName}
      </div>
      <div>{contact.phoneNumber}</div>
    </div>
  );
};

export default Contact;
