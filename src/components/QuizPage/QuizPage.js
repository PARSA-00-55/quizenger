import React from "react";
import "./QuizPage.css";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizPage = () => {
  const quizesData = useLoaderData();
  const topicInfo = quizesData.data;
  const { logo, name } = topicInfo;
  const questions = quizesData.data.questions;
  return (
    <div className="container mt-5">
      <div className="w-25 mx-auto d-flex .flex-lg-row .flex-sm-column align-items-center">
        <img src={logo} alt={name} className="bg-dark | q-img" />
        &nbsp;
        <h1>Topic: {name}</h1>
      </div>
      {questions.map((question) => (
        <Question key={question.id} questions={question}></Question>
      ))}
    </div>
  );
};

export default QuizPage;
