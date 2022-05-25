import { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

const apiBase = "http://localhost:4000";

const callApi = () => {};

function App() {
  const [message, setMessage] = useState("hard-coded from frontend");

  useEffect(() => {
    const getMessage = async () => {
      const res = await axios.get(`${apiBase}/hello`);

      console.log("🚀 ~ file: App.tsx ~ line 18 ~ getMessage ~ res", res);

      const { data } = res;

      setMessage(data);
    };

    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={callApi}>
          click me
        </button>
        <p>{message}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
