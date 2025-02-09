import { createContext } from "react";

interface User {
    name: string;
    password: string;
  }
interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
  }
  
  // Create the context
  const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;