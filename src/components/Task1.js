import React, { useState } from 'react';

const Task1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValueTimes, setInputValueTimes] = useState(0);

  const handleInput = (event) => {
    setInputValue(event.target.value);
    setInputValueTimes(mostFrequent(event.target.value))
  };

  const mostFrequent = (str) => {
    if (str.length === 0) {
      return 0;
    }
    const strArr = str.replace(/\s/g, '').split('');
    let count = {};

    strArr.forEach(function(a) {
      count[a] = (count[a] || 0) + 1;
    });

    return Math.max(...Object.values(count));
  };

  return (
    <dl>
      <dt>Task 1</dt>
      <dd>Write a function that find the most frequent character in a string (case insensitive)</dd>

      <dt>Solution</dt>
      <dd>
        <p>String include most frequent characters times: {inputValueTimes}</p>
        <input
          value={inputValue}
          placeholder="Write your string"
          onChange={(event) => handleInput(event)}
          type = "text" />
      </dd>
    </dl>
  )
};

export default Task1;
