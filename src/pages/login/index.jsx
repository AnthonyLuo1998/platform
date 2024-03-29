import { Link } from "react-router-dom";
import { LoginWrap } from "./style";
import { Button, Form, Input, Divider } from "antd";
function Login() {
  const [form] = Form.useForm();

  const handleLogin = async () => {
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
    <LoginWrap>
      <div className="login-form-wrap">
        <div className="login-form">
          <Form form={form}>
            <p className="please-login">请登录</p>

            <p className="user-login">账号登录</p>

            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入您的用户名！",
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
                  message: "请输入您的密码！",
                },
              ]}
            >
              <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block onClick={handleLogin}>
                登录
              </Button>
            </Form.Item>

            <Divider />

            <Form.Item style={{ textAlign: "center" }}>
              <Link to="/register">没有账号？注册新账号</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginWrap>
  );
}

export default Login;
