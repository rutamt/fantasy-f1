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
  Input,
  Popconfirm,
} from "antd";
import { EditOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

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
        <Form.Item
          name="teamName"
          label="Team name"
          rules={[
            {
              required: true,
              message: "Missing team name",
            },
          ]}
        >
          <Input />
        </Form.Item>
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

const TeamCard = ({ card, showModal, deleteCard }) => {
  return (
    <Card
      key={card.teamName}
      title={card.teamName}
      style={{
        width: 300,
      }}
      actions={[
        <Popconfirm
          onConfirm={deleteCard}
          title="Delete team"
          description="Are you sure to delete this team?"
        >
          <DeleteOutlined />
        </Popconfirm>,
        <EditOutlined key="edit" onClick={showModal} />,
      ]} // Use the editCard function
    >
      <Row>
        <Col span={12}>
          <Title level={5}>{card.D1}</Title>
        </Col>
        <Col span={12}>
          <Title level={5}>{card.D2}</Title>
        </Col>
      </Row>
      <Space direction="vertical" size={16}>
        <Title level={5}>{card.Car}</Title>
      </Space>
    </Card>
  );
};

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("view"); // view, add, edit
  const [teamId, setTeamId] = useState(""); // teamId being edited
  const [cards, setCards] = useState({});
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api["error"]({
      message: `Error`,
      description: message,
      placement: "topLeft",
    });
  };

  const showModal = (newMode, editingTeamId) => {
    if (newMode === "edit") {
      setTeamId(editingTeamId);
    } else {
      setTeamId(nanoid(6));
    }
    setMode(newMode);
    setIsModalOpen(true);
  };
  const hideUserModal = () => {
    setMode("view");
    setIsModalOpen(false);
  };

  const deleteCard = (cardId) => {
    // delete the darn thing
    console.log("about to delete ", cards[cardId]);
    const newCards = { ...cards };
    delete newCards[cardId];
    setCards(newCards);
  };

  // The card that gets created
  const addNewCard = (data) => {
    data.teamId = mode === "add" ? nanoid(6) : teamId;
    const newCards = { ...cards };
    newCards[data.teamId] = data;
    setCards(newCards);
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
        onClick={() => showModal("add")}
        id="add-cards-btn"
        disabled={Object.keys(cards).length === 3}
      />
      <div>
        <Space direction="horizontal">
          {Object.keys(cards).map((key) => (
            <TeamCard
              key={key}
              card={cards[key]}
              showModal={() => showModal("edit", key)}
              deleteCard={() => deleteCard(key)}
            />
          ))}
        </Space>
      </div>
    </div>
  );
}

export default Home;
