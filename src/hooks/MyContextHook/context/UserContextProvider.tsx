import UserContext from "./UserContext";
import  { useState } from "react";

interface User {
    name: string;
    password: string;
  }

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  

export default UserProvider