import { useState, Fragment, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import logo from "./logo.svg";
import { AxiosContext } from "./app/context";
import { Ingredient, ApiResponse } from "./app/types";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </header>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <h1>Recepea</h1>
    </>
  );
};

export default App;

const SignUp = () => {
  return (
    <>
      <h2>Welcome to</h2>
      <h1>RECEPEA</h1>
      <h3>For only $8/month, you'll get</h3>
      <h4>- Access to infinite source of global recipes</h4>
      <h4>- Exclusive discounts on grocery shopping</h4>
      <h4>- Price comparison every time you buy</h4>
      <h4>- Easy click-and-collect directly from recipe to grocery</h4>
      <span>
        <p>Already a member?</p>
        <Link to="/login">Login</Link>
      </span>
      <button type="button">Subscribe</button>
    </>
  );
};

export const SomeCrap = () => {
  const { api } = useContext(AxiosContext);

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);

  const getIngredients = async () => {
    setLoading(true);

    const { data }: ApiResponse = await api.get("/ingredients");

    setIngredients(data);

    setLoading(false);
  };

  return (
    <>
      {loading && <p>loading...</p>}
      <button type="button" onClick={getIngredients}>
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
    </>
  );
};
