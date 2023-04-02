import { UserContext } from "../Providers/userContext";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <>{user ? <Outlet /> : null}</>;
};

export default ProtectedRoutes;
