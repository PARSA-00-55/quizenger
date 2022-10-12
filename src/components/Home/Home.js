import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Cards from "../Card/Card";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import "./Home.css";

const Home = () => {
  const topicsLoad = useLoaderData();
  const topics = topicsLoad.data;
  return (
    <div className="container m-auto">
      <Hero></Hero>
      {/* <h4>main topics: {topicsLoad.data.length}</h4> */}
      <Container  fluid>
        <Row>
        {
            topics.map( topic => <Cards  key={topic.id} topic={topic}></Cards>)
        }
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;
