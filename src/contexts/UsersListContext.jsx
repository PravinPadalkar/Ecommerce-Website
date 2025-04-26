import { createContext, useState } from "react";
import useLocalStroage from "../hooks/useLocalStroage";

export const UsersListContext = createContext([]);

export function UsersListProvider({ children }) {
  const [usersList, setUsersList] = useLocalStroage("usersList", []);
  const [isAuthenticated, setIsAuthenticated] = useLocalStroage("isAuthenticated", false);
  return (
    <UsersListContext.Provider
      value={{ usersList, setUsersList, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UsersListContext.Provider>
  );
}
