import { Button, Form, Input, Radio } from "antd";
import validation from "../functions/validation";
import { useNavigate, Link } from "react-router-dom"

import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()

  const onReset = () => {
    form.resetFields();
    console.log("hdhjkjdsnk");
  };

  const onFinish = async (values) => {
    const validate = validation(values);
    if (!validate) {
      return toast.error("password not matched");
    } else {
      // return toast.success("user registered successfully");
      const { firstname, lastname, gender, email,address, password, confirmpassword } =
        values;
      const formValues = {
        firstName: firstname,
        lastName: lastname,
        gender,
        email,
        password,
        expenseId: 1234,
        address
      };
      await axios
        .post(`https://expense-tracker-server-hpwx.onrender.com/user`, formValues)
        .then((res) => {
          toast.success("user created sucessfully");
          // console.log(res)
          window.localStorage.setItem("user",res.data.firstName);
          window.localStorage.setItem("userId",res.data._id);
          navigate(`/expenses`)
        }).catch(error=>{console.log("eoor",error);toast.error("Error: User already exist please login")});
    }
  };

  return (
    <div className="signup_wrapper">
      <h1 className="form_title">Become A Member</h1>

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
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "please enter your first name",
            },
          ]}
        >
          <Input placeholder="enter your first name" />
        </Form.Item>
        <Form.Item
          label="last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "please enter your last name",
            },
          ]}
        >
          <Input placeholder="enter your last name" />
        </Form.Item>
        <Form.Item label="Gender" className="signup_gender" name="gender">
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
              type: "email",
            },
          ]}
          tooltip="enter your email"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
          tooltip="password should be atleast 6 charecters"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: "Please enter your password again!",
            },
          ]}
          tooltip="password should be same"
        >
          <Input.Password />
        </Form.Item>
          have account <Link to="/" >login</Link>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="signup_button"
        >
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
