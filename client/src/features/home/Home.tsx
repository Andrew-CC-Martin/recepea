import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const Home: FC = (): JSX.Element => {
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
