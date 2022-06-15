import { useContext } from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../app/context";

import { setJWT } from "../auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

const { Title } = Typography;

export const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setAuthenticated } = useContext(AuthContext);

  const logOut = () => {
    dispatch(setJWT(""));
    setAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <Typography>
        <Title>My Account</Title>
      </Typography>
      <Button type="primary" onClick={logOut}>
        Log out
      </Button>
    </>
  );
};
