import { createContext, useEffect, useState } from "react";
import { Api } from "../Services/api";
export const ContactsContext = createContext();
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const [search, setSearch] = useState("");

  const contactFilter = contacts.filter((contact) =>
    contact.name.startsWith(search)
  );


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const contactsList = async () => {
        try {
          const response = await Api.get("/contacts", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContacts(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      contactsList();
    }
  }, [contacts]);

  const contactsCreate = async (formdata) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.post("/contacts", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts([...contacts], response.data);

     

      ///Futuro toast de criação aqui
    } catch (error) {
      console.log(error);
    }
  };

  const contactsRemove = async (contactId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newContacts = contacts.filter(
        (contact) => contact.id !== contactId
      );
      setContacts(newContacts)

      //Futuro toast de remoção
    } catch (error) {
      console.log(error);
    }
  };

  const contactsUpdate = async (formData, contactId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newContacts = contacts.map((contact) => {
        if (contactId === contact.id) {
          return { ...contact, ...formData };
        } else {
          return newContacts;
        }
      });
      setContacts(newContacts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        search,
        contactFilter,
        setSearch,
        contactsCreate,
        contactsRemove,
        contactsUpdate,
        setEditContact,
        editContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
