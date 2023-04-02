import { LoginDiv } from "./style";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Providers/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm({});

  const submit = (formData) => {
    userLogin(formData);
    reset();
  };

  const pageRegister = () => {
    router.push("/register");
  };

  return (
    <LoginDiv>
      <form onSubmit={handleSubmit(submit)}>
        <h1>LOGIN</h1>
        <label>E-mail</label>
        <input type="email" {...register("email")} />

        <label>Senha</label>
        <input type="password" {...register("password")} />

        <div className="divBtnSubmit">
          <button type="submit">Entrar</button>
          <p>Ou</p>
          <a className="aWhite">{<Link to={"/register"}>Cadastre-se</Link>}</a>
        </div>
      </form>
    </LoginDiv>
  );
};

export default LoginComponent;
