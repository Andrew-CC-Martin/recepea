import { Button, Form, Input } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../app/data";
import { useAppDispatch } from "../../../app/hooks";
import { setJWT } from "../authSlice";

export const SignUp: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await api.post("/users/signup", values);
      const { data: jsonWebToken } = response;
      dispatch(setJWT(jsonWebToken));
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
      <Form.Item
        label="Email"
        name="email"
        validateTrigger={["onBlur"]}
        rules={[
          { required: true, message: "Please input an email" },
          { type: "email", message: "Email isn't valid" },
        ]}
      >
        <Input autoComplete="email" />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        validateTrigger={["onBlur"]}
        rules={[{ required: true, message: "Please input a name" }]}
      >
        <Input autoComplete="name" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        validateTrigger={["onBlur"]}
        rules={[
          { required: true, message: "Please input a password" },
          {
            type: "string",
            min: 8,
            message: "Password must be at least 8 characters",
          },
          {
            validator: async (_, password) => {
              if (!/[0-9]/.test(password)) {
                return Promise.reject(
                  new Error("Password must contain a number")
                );
              }
            },
          },
          {
            validator: async (_, password) => {
              if (!/[A-Z]/.test(password)) {
                return Promise.reject(
                  new Error("Password must contain an uppercase letter")
                );
              }
            },
          },
          {
            validator: async (_, password) => {
              if (!/[a-z]/.test(password)) {
                return Promise.reject(
                  new Error("Password must contain a lowercase letter")
                );
              }
            },
          },
          {
            validator: async (_, password) => {
              if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
                return Promise.reject(
                  new Error("Password must contain a special character")
                );
              }
            },
          },
        ]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        validateTrigger={["onBlur"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match")
              );
            },
          }),
        ]}
      >
        <Input.Password autoComplete="new-password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};
