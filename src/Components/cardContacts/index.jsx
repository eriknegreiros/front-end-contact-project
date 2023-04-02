import { ContactsContext } from "../../Providers/contactsContext";
import { Cards } from "./style";
import { useContext } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { UserContext } from "../../Providers/userContext";
import ContactsUpdateForm from "../modalUpdateContact/index";
import modalUpdateProfile from "../modalUpdateProfile/index";

const CardContacts = () => {
  const {
    contacts,
    contactsRemove,
    contactFilter,
    editContact,
    setEditContact,
  } = useContext(ContactsContext);

  return (
    <Cards>
      {editContact ? <ContactsUpdateForm /> : null}

      {contacts.length > 0 ? (
        <ul>
          {contactFilter.map((contact) => (
            <li key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.email}</p>
              <p>{contact.telephone}</p>
              <div className="divBtn">
                <button onClick={() => setEditContact(contact)}>
                  <MdModeEditOutline className="icon" />
                </button>
                <button onClick={() => contactsRemove(contact.id)}>
                  <AiFillDelete className="icon" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="notContact">
          Infelizmente não temos contatinhos cadastrados ainda!
        </p>
      )}
    </Cards>
  );
};

export default CardContacts;
