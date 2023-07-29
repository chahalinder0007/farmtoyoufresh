import React from "react";
import HeaderInnerPages from "../headerInnerPages";
import { pageHeading, headerImg, list } from "./content";
import "./style.scss";
import { Button, Col, Form, Input, Row } from "antd";
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <HeaderInnerPages pageHeading={pageHeading} headerImg={headerImg} />
      <div className="container contact">
        <div className="contentSection">
          <Row justify="center" align="middle" gutter={50}>
            {list.map((c) => {
              return (
                <Col span={8}>
                  <div className="contactBlock">
                    <div className="icon">
                      <img src={c.icon} alt="" />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row justify="center">
            <Col span={14}>
              <div className="contactForm">
                <h1>Feel free you can share your queries.</h1>
                <Form
                  form={form}
                  name="contact"
                  onFinish={onFinish}
                  autoComplete="off"
                  layout="vertical"
                >
                  <Row gutter={50}>
                    <Col span={12}>
                      <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Required Field.",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Required Field.",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Type Your Message"
                        name="message"
                        rules={[
                          {
                            required: true,
                            message: "Required Field.",
                          },
                        ]}
                      >
                        <TextArea />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Send Your Message
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Contact;
