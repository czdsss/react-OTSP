import React, { Component, Fragment } from "react";
//css
import "./index.scss";
//antd 组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
class LoginFrom extends Component{
  constructor(){
    super();
    this.state = {};
  }
  
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  toggleForm = () => {
    this.props.switchForm("register");
  }

  render(){
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="colum">登录</h4>
          <span onClick={this.toggleForm} >帐号注册</span>
        </div>
        <Form 
        name="normal_login" 
        className="login-form" 
        initialValues={{ remember: true }} 
        onFinish={() => this.onFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入学号/工号' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="学号/工号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}

export default LoginFrom;