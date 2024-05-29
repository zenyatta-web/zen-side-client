import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginButton from "./Auth0/login.tsx";
import LogoutButton from "./Auth0/logout.tsx";
import Profile from "./Auth0/profile.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Hello word from side-client-zen =)</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h1>Login ☻</h1>
        <LoginButton />
      </div>
      <div>
        <h1>Log out ☺</h1>
        <LogoutButton />
      </div>
      <div>
        <Profile />
      </div>
    </>
  );
}

export default App;
