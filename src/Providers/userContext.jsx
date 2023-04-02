  import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../Services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await Api.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);


  const getUserProfile = () => {
    try {
      Api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
    } catch (error) {
      console.log(error)
    }
     
  };

  //formdata - dados de registro que vai recer - name, email, password, telephone
  const userRegister = async (formData) => {
    try {
      const response = await Api.post("/register", formData);
      //futuro toast, mensagem de sucesso para redirecionar para pagina de Login
      console.log(response.data, "registrado");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //formdata - dados de login que vai recer - email, password
  const userLogin = async (formData) => {
    try {
      const response = await Api.post("/login", formData);

      //futuro toast, mensagem de sucesso para redirecionar para pagina de Acesso aos contatos
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@ISLOGGEDIN", true);

      navigate("/home");

      console.log(response.data, "logado");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@ISLOGGEDIN");

    navigate("/login");
  };

  const userUpdate = async (formData, userId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await Api.patch(`/users/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getUserProfile()
    } catch (error) {
      console.log(error)
    } 
  }


  return (
    <UserContext.Provider value={{ user, userRegister, userUpdate, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
