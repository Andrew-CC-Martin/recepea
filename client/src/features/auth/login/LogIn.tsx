import { Button, Form, Input } from "antd";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../app/data";
import { useAppDispatch } from "../../../app/hooks";
import { setJWT } from "../authSlice";
import { AuthContext } from "../../../app/context";

export const LogIn: FC = (): JSX.Element => {
  const { setAuthenticated } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await api.post("/users/login", values);
      const { data: jsonWebToken } = response;
      dispatch(setJWT(jsonWebToken));
      setAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="Email" name="email">
        <Input autoComplete="email" />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password autoComplete="current-password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};
