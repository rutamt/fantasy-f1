import React, { useState } from "react";
import { Modal, Card, Image, Typography, Space, Row, Col } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 className="App-link">Yay, you've signed in!</h1>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Card
        title="Team 1"
        extra={"15M"}
        style={{
          width: 300,
        }}
        actions={[<EditOutlined key="edit" />]}
      >
        {" "}
        <Row>
          <Col span={12}>
            <Image
              width={100}
              height={100}
              src="https://www.stickers-garage.com/imgtransform.php?f=1&filename=https://www.stickers-garage.com/resize/720x720/zc/3/f/0/src/sites/stickers/files/products/ma0515.png"
            />
          </Col>
          <Col span={12}>
            <Image
              width={100}
              height={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lando_Norris_McLaren_driver_number.svg/1200px-Lando_Norris_McLaren_driver_number.svg.png"
            />
          </Col>
        </Row>
        <Space direction="vertical" size={16}>
          <Image src="https://e00-especiales-marca.uecdn.es/motor/images/formula1/escuderias/2023/gral/coche-mercedes-mediasombra.png"></Image>
          <Title level={5}>Mercedes</Title>
        </Space>
      </Card>
    </div>
  );
}

export default Home;
