import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

import { AuthContext } from "../../app/context";

export const Home: FC = (): JSX.Element => {
  const { authenticated } = useContext(AuthContext);

  return <>{authenticated ? <HomeLoggedIn /> : <HomeLoggedOut />}</>;
};

const HomeLoggedIn: FC = (): JSX.Element => {
  return (
    <>
      <p>logo goes here</p>
      <p>discover recipes link card goes here</p>
      <p>in my fridge link card goes here</p>
    </>
  );
};

const HomeLoggedOut: FC = (): JSX.Element => {
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
