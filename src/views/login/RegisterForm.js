import React, { Component, Fragment } from "react";
//css
import "./index.scss";
//antd 组件
import { Form, Input, Button } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
class RegisterFrom extends Component{
  constructor(){
    super();
    this.state = {};
  }
  
  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  toogleForm = () => {
    this.props.switchForm("login");
  }
  
  render(){
    return (
      <Fragment>
        <div className="form-header">
          <h4 className="colum">注册</h4>
          <span onClick={this.toogleForm}>登录</span>
        </div>
        <Form 
        name="normal_register" 
        className="registe-form" 
        initialValues={{ remember: true }} 
        onFinish={() => this.onFinish}
        >
          <Form.Item name="username" rules={[{ required: true, message: '请输入学号/工号' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="学号/工号" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="密码" />
          </Form.Item>
          <Form.Item name="passwords" rules={[{ required: true, message: '请重复密码' }]}>
            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="registe-form-button" block>
              立即注册
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}

export default RegisterFrom;