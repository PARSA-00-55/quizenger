import React from "react";
import "./Blog.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div className="container mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the purpose of react router?</Accordion.Header>
          <Accordion.Body>
          The ReactJS Router is mainly used for developing Single-Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does context api works?</Accordion.Header>
          <Accordion.Body>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling," or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does useRef() hooks works?</Accordion.Header>
          <Accordion.Body>
          "useRef()" returns a mutable ref object whose.current property is initialized to the passed argument (i.e., initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a "box" that can hold a mutable value in its.current property.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br /><br /><br />
      <Footer></Footer>
    </div>
  );
};

export default Blog;
