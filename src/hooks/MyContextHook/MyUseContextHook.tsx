
import Profile from "./components/profile";
import Login from "./components/login";
import UserContextProvider from "./context/UserContextProvider";
import ReadMore from "../../components/read-more-button";

export default function MyUseContextHook() {
  return (
  <UserContextProvider>
    <div className="container" style={{display : "flex" , alignItems : "center"}}>
        <h4>useContext</h4>
      <Login />
      <Profile />
      <ReadMore link={"https://www.youtube.com/watch?v=aAcI_FdfkA8&list=PLRAV69dS1uWQos1M1xP6LWN6C-lZvpkmq&index=13&t=57s"}  yes={true} children={"video"}></ReadMore>
    </div>
    </UserContextProvider>
  );
}
