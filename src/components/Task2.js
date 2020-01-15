import React, { useState } from 'react';

const Task2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsOdd, setInputIsOdd] = useState(false);
  const [inputLength, setInputLength] = useState(0);

  const handleInput = (event) => {
    const regNumb = /^[0-9\b]+$/;
    if (event.target.value === '' || regNumb.test(event.target.value)) {
      setInputValue(event.target.value);
      setInputLength(event.target.value.length)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('num23', inputValue);
    setInputIsOdd(!!(inputValue.length % 2));
  };

  const handleClearButton = () => {
    setInputValue('');
    localStorage.removeItem('num23');
  };

  return (
    <dl>
      <dt>Task 2</dt>
      <dd>Create simple HTML form with text field and buttons “Set” and “Clear”. On submit form set item to local storage with key “num23” and value from the text field. On click “Clear” button clean up text field and delete item “num23” from local storage. On page load get item “num23” from local storage, create paragraph element, set according value into paragraph, and insert it before form. Paint paragraph in red if item value is odd and in green if item value is even.</dd>

      <dl>Solution</dl>
      <dd>
        <p className={inputIsOdd ? 'red' : 'green'}>{localStorage.num23}</p>

        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            placeholder="Write your string"
            onChange={(event) => handleInput(event)}
            type = "text" />
          <button onClick={handleSubmit} disabled={inputLength === 0}>Set</button>
          <button onClick={handleClearButton}>Clear</button>
        </form>
      </dd>
    </dl>
  )
};

export default Task2;
