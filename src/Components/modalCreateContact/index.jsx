import { useContext, useState } from "react";
import { UserContext } from "../../Providers/userContext";
import { ModalDiv } from "./style";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { ContactsContext } from "../../Providers/contactsContext";
import ModalComponentCreate from "./modalComponentCreate/index";

const ModalCreateContact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useContext(UserContext);
  const { contactsCreate, contacts, search, setSearch } =
    useContext(ContactsContext);

  return (
    <ModalDiv>
      <div className="divSearch">
        <h2>
          Seja bem vindo, <span>{user?.name} </span>
        </h2>
        <input
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          placeholder="Pesquise por um contatinho 🤭"
          type="text"
        />
        <button onClick={handleOpen} className="btnCreate">
          +
        </button>
        <Modal open={open} onClose={handleClose}>
          <ModalComponentCreate handleClose={handleClose} />
        </Modal>
      </div>
    </ModalDiv>
  );
};

export default ModalCreateContact;
