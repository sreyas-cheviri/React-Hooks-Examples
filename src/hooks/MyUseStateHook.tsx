import { useState } from "react";
import ReadMore from "../components/read-more-button";

function MyUseStateHook() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div style={{display:"flex" , alignItems: "center" }}>
      <h4>useState</h4>
        <h2 className="USH2">{count}</h2>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <ReadMore link="https://react.dev/reference/react/useState" children="Read more"></ReadMore>
      </div>
    </div>
  );
}

export default MyUseStateHook;
