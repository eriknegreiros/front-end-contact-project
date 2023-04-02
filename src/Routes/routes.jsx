import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/register";
import Home from "../Pages/home";
import ProtectedRoutes from "../Pages/protectedRoutes";
import { ContactsProvider } from "../Providers/contactsContext";

const AppRoutes = () => {



  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <ContactsProvider>
              <Home />
            </ContactsProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
