import "./App.css";
import MyUseEffectHook from "./hooks/MyUseEffectHook";
import MyUseStateHook from "./hooks/MyUseStateHook";
import MyUseMemoHook from "./hooks/MyUseMemoHook";
import MyUseContextHook from "./hooks/MyContextHook/MyUseContextHook";

function App() {
  return (
    <>
      <div className="header">
        <a target="_blank" href="https://react.dev/">
          <img src="../public/logo_dark.svg" alt="React Logo" />
        </a>
        <h3>React - Hooks - Examples - With - Tuto</h3>
        <a target="_blank" href="https://github.com/sreyas-cheviri/React-Hooks-Examples">
          <img src="../public/github-mark-white.png" alt="GitHub Logo" />
        </a>
      </div>
      <div className="hooks-container">
        <MyUseStateHook />
        <MyUseEffectHook />
        <MyUseMemoHook />
        <MyUseContextHook />
      </div>
    </>
  );
}

export default App;
