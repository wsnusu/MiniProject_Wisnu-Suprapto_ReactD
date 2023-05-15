import { Card, Image, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { logo } from "../../assets/assets";

const About = () => {
  const { Text, Link } = Typography;
  return (
    <div className="div">
      <Card>
        <Row justify="center">
          <Title level={2}>About us</Title>
        </Row>
        <Row justify="center" align="center">
          <Image src={logo} width={300}></Image>
        </Row>
        <Row align="center">
          <Text>
            Welcome to Yomu, a vibrant online community library where book
            lovers from all around the world unite to celebrate the joy of
            reading and share their literary creations. At Yomu, we believe that
            everyone has a story to tell, and our platform empowers individuals
            to showcase their unique voices and ideas through the written word.
            As a member of Yomu, you have the opportunity to not only explore an
            extensive collection of diverse books but also contribute to the
            library by uploading your very own literary works. Whether you're an
            aspiring author, a seasoned writer, or simply someone who enjoys
            penning down their thoughts, Yomu provides a creative space for you
            to share your stories with a global audience. Our library is a
            treasure trove of literary genres, covering a wide range of subjects
            to cater to all reading preferences. From captivating fiction to
            thought-provoking non-fiction, from heartwarming poetry to
            informative guides, Yomu has something for everyone. Discover new
            worlds, immerse yourself in intriguing narratives, and connect with
            fellow book enthusiasts who share your passion for the written word.
            Yomu's intuitive and user-friendly interface makes it effortless to
            navigate through the virtual shelves, where countless stories await
            your exploration. You can search for books by genre, author, or even
            by keywords, ensuring you find the perfect read that matches your
            interests and curiosity. Leave reviews, engage in discussions, and
            build connections with fellow readers, fostering a vibrant and
            supportive community of literary enthusiasts. However, Yomu isn't
            just about consuming literature; it's about creating it too. We
            encourage you to unleash your imagination and share your literary
            works with the world. Upload your own books, short stories, poems,
            or any other form of written expression, and let your creativity
            shine. Yomu provides you with a platform to receive feedback,
            connect with readers who appreciate your style, and grow as a
            writer. At Yomu, we value inclusivity, diversity, and the freedom of
            expression. We celebrate writers from all walks of life, embracing
            stories that reflect the rich tapestry of our global community. We
            believe that by sharing our narratives, we foster understanding,
            empathy, and bridge gaps between cultures and perspectives. Join
            Yomu today and embark on a literary journey like no other. Immerse
            yourself in a world of stories, connect with like-minded
            individuals, and contribute to the ever-growing tapestry of human
            creativity. Together, let's make Yomu a vibrant haven for all book
            lovers and creators, where words have the power to inspire,
            entertain, and transform lives.
          </Text>
        </Row>
      </Card>
    </div>
  );
};

export default About;
