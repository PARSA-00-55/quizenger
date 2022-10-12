import React from 'react';
import Options from '../Options/Options';
import './Question.css';

const Question = ({questions}) => {
    const {options, question} = questions
    console.log(questions);
    return (
        <div className='container m-4 | question-body'>
            <h4>{question.slice(3, -4)}</h4><br/>
            {
                options.map( option => <Options key={option} option={option}></Options>)
            }
            <p><small>Correct Answer is: <b>{questions.correctAnswer}</b></small></p>
        </div>
    );
};

export default Question;