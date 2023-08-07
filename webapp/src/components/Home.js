import React, { useState } from "react";
import {
  Modal,
  Card,
  Typography,
  Space,
  Row,
  Col,
  Select,
  Form,
  Button,
  notification,
} from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ModalForm = ({ open, onCancel, cardCreate }) => {
  const [form] = Form.useForm();
  const onOk = () => {
    form.submit();
    //   setIsModalOpen(false);
  };
  const onFinish = (values) => {
    // Form succsess, handle data here
    console.log("Received values of form:", values);

    cardCreate(values);

    onCancel();
  };

  const d1Options = [
    {
      value: "Lewis Hamilton",
      label: "Lewis Hamilton",
    },
    {
      value: "Lando Norris",
      label: "Lando Norris",
    },
    {
      value: "Max Verstappen",
      label: "Max Verstappen",
    },
  ];
  const d2Options = [
    {
      value: "George Russell",
      label: "George Russell",
    },
    {
      value: "Oscar Piastri",
      label: "Oscar Piastri",
    },
    {
      value: "Sergio Perez",
      label: "Sergio Perez",
    },
  ];
  const carOptions = [
    {
      value: "Mercedes",
      label: "Mercedes",
    },
    {
      value: "Mclaren",
      label: "Mclaren",
    },
    {
      value: "Red Bull",
      label: "Red Bull",
    },
  ];

  return (
    <Modal
      title="Team management"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      getContainer={false}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Select Driver one */}
        <Form.Item
          name="D1"
          label="Driver one"
          rules={[
            {
              required: true,
              message: "Missing driver",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a driver"
            optionFilterProp="children"
            id="select-d1"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={d1Options}
          />
        </Form.Item>

        {/* Select driver two */}
        <Form.Item
          name="D2"
          label="Driver two"
          rules={[
            {
              required: true,
              message: "Missing driver",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a second driver"
            optionFilterProp="children"
            id="select-d2"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={d2Options}
          />
        </Form.Item>

        {/* Select car */}
        <Form.Item
          name="Car"
          label="Car"
          rules={[
            {
              required: true,
              message: "Missing car",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Select a car"
            optionFilterProp="children"
            id="select-d1"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={carOptions}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api["error"]({
      message: `Error`,
      description: message,
      placement: "topLeft",
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const hideUserModal = () => {
    setIsModalOpen(false);
  };

  // The card that gets created
  const addNewCard = (data) => {
    if (cards.length < 3) {
      const newCard = (
        <Card
          key={cards.length + 1}
          title={`Team ${cards.length + 1}`}
          extra={data.extra}
          style={{
            width: 300,
          }}
          actions={[<EditOutlined key="edit" onClick={showModal} />]} // Use the editCard function
        >
          <Row>
            <Col span={12}>
              <Title level={5}>{data.D1}</Title>
            </Col>
            <Col span={12}>
              <Title level={5}>{data.D2}</Title>
            </Col>
          </Row>
          <Space direction="vertical" size={16}>
            <Title level={5}>{data.Car}</Title>
          </Space>
        </Card>
      );

      setCards([...cards, newCard]);
    } else {
      openNotification("Max teams reached");
      console.log("Maximum number of teams reached.");
    }
  };

  return (
    <div>
      {contextHolder}

      <h1 className="App-link">Yay, you've signed in!</h1>
      <ModalForm
        open={isModalOpen}
        onCancel={hideUserModal}
        cardCreate={addNewCard}
      />

      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        onClick={showModal}
        id="add-cards-btn"
      />
      <div>
        <Space direction="horizontal">
          {cards.map((card) => (
            <div key={card.key}>{card}</div>
          ))}
        </Space>
      </div>
    </div>
  );
}

export default Home;
