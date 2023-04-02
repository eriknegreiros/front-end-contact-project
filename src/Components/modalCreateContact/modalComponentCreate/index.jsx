import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ModalCreate } from "./style";
import { ContactsContext } from "../../../Providers/contactsContext";

const ModalComponentCreate = ({ handleClose }) => {
  const { register, handleSubmit } = useForm();

  const { contactsCreate } = useContext(ContactsContext);

  const submit = (formdata) => {
    contactsCreate(formdata);
  };

  return (
    <ModalCreate>
      <form onSubmit={handleSubmit(submit)}>
        <div className="divClose">
          <h4>Cadastre um contatinho</h4>
          <span onClick={handleClose}>X</span>
        </div>
        <input placeholder="Nome" type="text" {...register("name")} />
        <input placeholder="E-mail" type="text" {...register("email")} />
        <input placeholder="Telefone" type="text" {...register("telephone")} />
        <button type="submit">CRIAR</button>
      </form>
    </ModalCreate>
  );
};

export default ModalComponentCreate;
