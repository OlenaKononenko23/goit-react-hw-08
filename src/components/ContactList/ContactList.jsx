import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';

import css from './ContactList.module.css'
import Contact from '../Contacs/Contact'



export default function ContactList () {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
      <>
        {!filteredContacts?.length && !error && !isLoading && (
          <b>No contacts found</b>
        )}
        {error && <b>{error}</b>}
        <ul className={css.list}>
            {filteredContacts.map((contact) => {
                return (
                    <li key={contact.id} className={css.contactItem}>
                        <Contact id={contact.id} name={contact.name} phone={contact.number} onDelete={onDeleteContact}/>
                    </li>
                )
            })}
        </ul>
      </>
  )
}