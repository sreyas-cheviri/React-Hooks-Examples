import { useState } from "react";
import ReadMore from "../components/read-more-button";

function MyUseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div style={{display:"flex" , alignItems: "center" }}>
      <h4>useState</h4>
      <button>{count}</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <ReadMore link="https://react.dev/reference/react/useState" children="read more"  yes={true}></ReadMore>
      </div>
    </div>
  );
}

export default MyUseStateHook;
