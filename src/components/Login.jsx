import { Button, Form, Input, Spin } from "antd";

// import { Link } from "react-router-dom";
import validation from "../functions/validation";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [loginForm] = Form.useForm();
  const onFinish = async (values) => {
    // return toast.success("user registered successfully");
    const { email, password } = values;
    setLoading(true);
    console.log(email, password);
    await axios
      .post(`http://localhost:8000/user/login`, { ...values })
      .then((res) => {
        setLoading(false);
        toast.success("user Login sucessfully");
        console.log("qwert", res);
        window.localStorage.setItem("user", res.data.firstName);
        window.localStorage.setItem("userId", res.data._id);
        navigate(`/expenses`);
      })
      .catch((error) => {
        setLoading(false);
        console.log("eoor", error);
        toast.error("Error: invalid user");
      });
    loginForm.resetFields();
  };

  return (
    <>
      <div className="signup_wrapper">
        <h1 className="form_title">Welcome BAck</h1>
        {loading ? (
          <Spin />
        ) : (
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
              border: "1px solid #80808069",
              margin: "auto",
              padding: "40px",
              backgroundColor: "azure",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            form={loginForm}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            new user? <Link to="/">signup</Link>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </>
  );
};

export default Login;
