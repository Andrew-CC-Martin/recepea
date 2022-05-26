import { useState } from "react";
import axios from "axios";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { getApiBase } from "./app/config";
import logo from "./logo.svg"

const apiBase = getApiBase();

function App() {
  const [message, setMessage] = useState("hard-coded from frontend");
  const [loading, setLoading] = useState(false);

  const getHello = async () => {
    setLoading(true);
    const res = await axios.get(`${apiBase}/hello`);

    const { data } = res;

    setMessage(data);

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading && <p>loading...</p>}
        <button type="button" onClick={getHello}>
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
