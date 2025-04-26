import { createContext, useState } from "react";
import useLocalStroage from "../hooks/useLocalStroage";

export const UsersListContext = createContext([]);

export function UsersListProvider({ children }) {
  const [usersList, setUsersList] = useLocalStroage("usersList", [{fullName:'test',username:'test',password: 'test'}]);
  const [userDetails, setUserDetails] = useLocalStroage("usersDetails", []);
  const [isAuthenticated, setIsAuthenticated] = useLocalStroage("isAuthenticated", false);
  return (
    <UsersListContext.Provider
      value={{ usersList, setUsersList, isAuthenticated, setIsAuthenticated ,userDetails, setUserDetails }}
    >
      {children}
    </UsersListContext.Provider>
  );
}
