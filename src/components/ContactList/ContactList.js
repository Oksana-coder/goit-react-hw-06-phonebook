import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import actions from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selector';
import './ContactList.scss';


const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return(
  <ul>
    {contacts.map(({ id, name, number}) => (
      <li key={id} className="contact-list__item">
        <ContactListItem
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);
};

export default ContactList;




// const getFilteredContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getFilteredContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: (id) => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);