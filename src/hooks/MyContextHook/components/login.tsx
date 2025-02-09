import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext is null");
  }
  const { setUser } = userContext;
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUser({ name, password });
  };
  return (
    <div style={{display:"flex",alignItems : "center"}}>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
