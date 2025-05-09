import { useContext } from "react";
import { UsersListContext } from "../contexts/UsersListContext";

export const useAuth = () => {
  const context = useContext(UsersListContext);
  return context;
};
