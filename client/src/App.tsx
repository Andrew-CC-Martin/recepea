import { useState, Fragment } from "react";
import axios from "axios";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { getApiBase } from "./app/config";
import logo from "./logo.svg";

import { Ingredient } from "./app/types";

function App() {
  const apiBase = getApiBase();
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const getHello = async () => {
    setLoading(true);
    const { data } = await axios.get(`${apiBase}/ingredients`);
    console.log("🚀 ~ file: App.tsx ~ line 19 ~ getHello ~ data", data);

    setIngredients(data);

    setLoading(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {loading && <p>loading...</p>}
        <button type="button" onClick={getHello}>
          get ingredients
        </button>
        {ingredients.map((ingredient) => (
          <Fragment key={ingredient.id}>
            <h1>{ingredient.name}</h1>
            <p>{ingredient.description}</p>
            <img src={ingredient.imgUrl} alt={ingredient.name} />
          </Fragment>
        ))}
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
