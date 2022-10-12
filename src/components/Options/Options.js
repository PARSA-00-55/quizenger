import React from 'react';
import './Options.css';

const Options = ({option}) => {
    return (
        <div className=' m-3'>
            <input type="radio" name="question" value={option} /> {option}
        </div>
    );
};

export default Options;