import { PropTypes } from 'prop-types';
import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import ContactItemStyled from './ContactItem.styled';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ContactItemStyled>
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
