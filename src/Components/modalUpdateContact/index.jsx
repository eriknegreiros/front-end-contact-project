import { useContext } from "react";
import { ContactsContext } from "../../Providers/contactsContext";
import { useForm } from "react-hook-form";
import { FormModal } from "./style";

const ContactsUpdateForm = () => {
  const { editContact, setEditContact, contactsUpdate } =
    useContext(ContactsContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: editContact.name,
      email: editContact.email,
      telephone: editContact.telephone,
    },
  });

  const submit = (formData) => {
    contactsUpdate(formData, editContact.id);
  };

  return (
    <FormModal>
      <form className="formUpdate" onSubmit={handleSubmit(submit)}>
        <div className="divTitle">
          <h2>Atualize um contatinho:</h2>
          <span onClick={() => setEditContact(null)}>X</span>
        </div>
        <input
          className="inputUpdate"
          type="text"
          {...register("name")}
          placeholder="Nome"
        />
        <input
          className="inputUpdate"
          type="text"
          {...register("email")}
          placeholder="Email"
        />
        <input
          className="inputUpdate"
          type="text"
          {...register("telephone")}
          placeholder="Telefone"
        />
        <button type="submit">ATUALIZAR</button>
      </form>
    </FormModal>
  );
};

export default ContactsUpdateForm;
