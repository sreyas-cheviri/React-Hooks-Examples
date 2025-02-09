import MyUseEffectHook from "./hooks/MyUseEffectHook";
import MyUseStateHook from "./hooks/MyUseStateHook";
import "./App.css";
import MyUseMemoHook from "./hooks/MyUseMemoHook";
import MyUseContextHook from "./hooks/MyContextHook/MyUseContextHook";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent:"space-between" , margin : "30px"}}>
        <a target="_blank" href="https://react.dev/"><img src="../public/logo_dark.svg" alt="" /></a>
        <h3>React - Hooks - Examples</h3>
        <a target="_blank" href="https://github.com/sreyas-cheviri/React-Hooks-Examples"><img src="../public/github-mark-white.png" alt="" /></a>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <MyUseStateHook />
        <MyUseEffectHook />
        <MyUseMemoHook />
        <MyUseContextHook/>
      </div>
    </>
  );
}

export default App;
