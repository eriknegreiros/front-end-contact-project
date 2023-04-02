import { useContext } from "react";
import { HeaderDefault } from "./style";
import { UserContext } from "../../Providers/userContext";

const HeaderComponent = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <HeaderDefault>
      <div>
        <h1>Contatinhos</h1>
      </div>
      <button onClick={() => userLogout()}>Sair</button>
    </HeaderDefault>
  );
};

export default HeaderComponent;
