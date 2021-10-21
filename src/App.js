import React from "react";
import "./App.css";
import { Form, Input, Col, Row, Button } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const FormItem = Form.Item;
function App() {
  const handleSubmit = async (data) => {
    await axios.post("http://localhost:4000/v1/user", data);
  };
  const emailValidation = (rule, value, callback) => {
    const reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    value
      ? reg.test(value) === true
        ? callback()
        : callback("Enter a valid email address.")
      : callback();
  };
  const history = useHistory();
  const routeChange = () => {
    let path = `/user-list`;
    history.push(path);
  };
  return (
    <div className="App">
      <BrowserRouter>

      {/* <Button color="primary" className="px-4" onClick={routeChange}>
        List
      </Button> */}
      </BrowserRouter>



      <Form name="simple-form" onFinish={handleSubmit} layout="vertical">
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="first_name"
              label="First Name"
              rules={[{ required: true, message: "Please enter a first name" }]}
            >
              <Input
                className="ant-input"
                placeholder="First Name"
                type="text"
                name="first_name"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="last_name"
              label="Last Name"
            >
              <Input
                className="ant-input"
                placeholder="Last Name"
                type="text"
                name="last_name"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="introduction"
              label="Introduction"
            >
              <Input
                className="ant-input"
                placeholder="Introduction"
                type="text"
                name="introduction"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter a email" },
                { validator: emailValidation },
              ]}
            >
              <Input
                className="ant-input"
                placeholder="Email"
                type="email"
                name="email"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="phone"
              label="Phone"
            >
              <Input
                className="ant-input"
                placeholder="Phone"
                type="text"
                name="phone"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="experience,"
              label="Experience,"
            >
              <Input
                className="ant-input"
                placeholder="Experience,"
                type="text"
                name="experience,"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={[16, 0]}>
          <Col xs={12} md={12}>
            <FormItem
              name="achievements"
              label="Achievements"
            >
              <Input
                className="ant-input"
                placeholder="Achievements"
                type="text"
                name="achievements"
                autoComplete="off"
              />
            </FormItem>
          </Col>
        </Row>
        <FormItem>
          <Row gutter={10} type="flex" justify="center">
            <Col xs={24} sm={24}>
              <Button htmlType="submit">Save</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    </div>
  );
}

export default App;
