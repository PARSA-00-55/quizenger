import React from "react";
import "./Card.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cards = ({ topic }) => {
  const {id, logo, name, total} = topic
  return (
      <Col>
        <Card className="card-body">
          <Card.Img
            variant="top"
            src={logo}
            className="bg-black | card-img"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Question: {total}
            </Card.Text>
            <Link to={`/${name}/${id}`} className='bg-primary text-white px-4 py-2 rounded | card-btn'>Start Quiz</Link>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default Cards;
