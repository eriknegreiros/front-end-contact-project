import HeaderComponent from "../Components/header";
import CardContacts from "../Components/cardContacts/index";
import ModalCreateContact from "../Components/modalCreateContact/index";
const Home = () => {
  return (
    <>
      <HeaderComponent />
      <ModalCreateContact />
      <CardContacts />
    </>
  );
};

export default Home;
