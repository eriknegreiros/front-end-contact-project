import { useContext } from "react";
import { UserContext } from "../../Providers/userContext";
import { useForm } from "react-hook-form";

const modalUpdateProfile = () => {
  const { user, userUpdate, setUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      telephone: user.telephone,
    },
  });

  const submit = (formData) => {
    userUpdate(formData, user.id);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <h2>Atualize seus dados</h2>
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
        {...register("password")}
        placeholder="Senha"
      />
      <input
        className="inputUpdate"
        type="text"
        {...register("telephone")}
        placeholder="Telefone"
      />
      <button type="submit">ATUALIZAR</button>
    </form>
  );
};

export default modalUpdateProfile;
