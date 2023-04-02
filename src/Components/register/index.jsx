import { useContext } from "react";
import { RegisterDiv } from "./style";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/userContext";
import { Link } from "react-router-dom";

const RegisterComponent = () => {
  const { userRegister } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm({});

  const submit = (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <RegisterDiv>
      <form onSubmit={handleSubmit(submit)}>
        <h1>CADASTRE-SE</h1>

        <label>Nome</label>
        <input type="text" {...register("name")} />

        <label>E-mail</label>
        <input type="email" {...register("email")} />

        <label>Senha</label>
        <input type="password" {...register("password")} />

        <label>Telefone</label>
        <input type="tel" {...register("telephone")} />

        <div className="divBtnSubmit">
          <button type="submit">Cadastrar</button>
          <p>Ou</p>
          <a className="aWhite">{<Link to={"/login"}>Login</Link>}</a>
        </div>
      </form>
    </RegisterDiv>
  );
};

export default RegisterComponent;
