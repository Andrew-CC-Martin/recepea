import { FC, useState, Fragment, useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Layout } from "antd";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import logo from "./logo.svg";
import { AxiosContext } from "./app/context";
import { Ingredient, ApiResponse } from "./app/types";
import { SignUp } from "./features/signup/SignUp";
import { LogIn } from "./features/login/LogIn";
import { RecepeaFooter } from "./features/footer/RecepeaFooter";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Content>
      <RecepeaFooter />
    </div>
  );
}

const Home: FC = () => {
  return (
    <>
      <h1>Recepea</h1>
      <Button type="primary">
        <Link to="/login">Log in</Link>
      </Button>
      <Button type="default">
        <Link to="/signup">Sign up</Link>
      </Button>
    </>
  );
};

export default App;

export const Ingredients = () => {
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
