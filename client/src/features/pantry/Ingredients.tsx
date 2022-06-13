import { FC, useState, Fragment, useContext } from "react";

import logo from "../../logo.svg";
import { AxiosContext } from "../../app/context";
import { Ingredient, ApiResponse } from "../../app/types";
import { Counter } from "../counter/Counter";

export const Ingredients: FC = () => {
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
