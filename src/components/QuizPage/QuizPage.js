import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {
    const quizes = useLoaderData();
    console.log(quizes);
    return (
        <div>
            <h3>quiz page</h3>
        </div>
    );
};

export default QuizPage;