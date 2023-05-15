import { Button, Card, Image, Row, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { logo } from "../../assets/assets";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { Text } = Typography;
  return (
    <div className="div">
      <Card
        style={{
          height: "900px",
        }}
      >
        <Row align="center">
          <Title>Welcome to Yomu : Where word comes alive</Title>
        </Row>

        <Row gutter={5} align="center">
          <Image src={logo}></Image>
        </Row>
        <Row gutter={5} align="center">
          <Text>
            Welcome to Yomu, where words come alive! Dive into a universe of
            stories, connect with fellow readers, <br></br> and share your own literary
            gems. Join our vibrant community library today and embark on a
            thrilling journey through the power of words. Happy reading and
            writing!
          </Text>
        </Row>
        <br></br>
        <Row gutter={5} align="center">
          <Space>
            <Link to="/books">
              <Button type="primary">Browse Books</Button>
            </Link>
            <Link to="/add-books">
              <Button>Upload Your Own Books</Button>
            </Link>
          </Space>
        </Row>
      </Card>
    </div>
  );
};

export default LandingPage;
