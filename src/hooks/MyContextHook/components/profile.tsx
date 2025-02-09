// src/components/Profile.tsx
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const context = useContext(UserContext);

  // Ensure context is not undefined
  if (!context) {
   
    return 
    
    // throw new Error("Profile must be used within a UserProvider");
  }

  const { user } = context;

  if (!user) return <h4>Not logged in</h4>;

  return (
    <div>
      <h4>{user.name}</h4>
    </div>
  );
}
