import { Link } from "react-router-dom";
import { RegisterWrap } from "./style";
import { Button, Form, Input, Divider } from "antd";
function Register() {
  const [form] = Form.useForm();

  const handleRegister = async () => {
    try {
      const formData = await form.validateFields();
      if (formData) {
        console.log(formData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RegisterWrap>
      <div className="register-form-wrap">
        <div className="register-form">
          <Form form={form} className="form-style">
            <p className="please-register">请注册</p>

            <p className="user-register">账号注册</p>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="用户名" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item
              name="rePassword"
              rules={[
                {
                  required: true,
                  message: "Please input your password again!",
                },
              ]}
            >
              <Input.Password placeholder="再次输入密码" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block onClick={handleRegister}>
                注册
              </Button>
            </Form.Item>

            <Divider />

            <Form.Item style={{ textAlign: "center" }}>
              <Link to="/login">已有账号？直接登录</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </RegisterWrap>
  );
}

export default Register;
