import React from 'react';

const Task4 = () => {
  const getProducts = async() => {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://54.39.188.42/');
    request.responseType = 'text';

    request.onload = function() {
      request.textContent = request.response;
    };

    return request;
  };


  console.log(getProducts());

  return (
    <dl>
      <dt>I did not have time to do this task, but I have similar solution:</dt>
      <dd>
        <p>Demo: <a href="https://vmishchenko.github.io/react_airport">https://vmishchenko.github.io/react_airport</a></p>
        <p>GitHub repo: <a href="https://github.com/vmishchenko/react_airport">https://github.com/vmishchenko/react_airport</a></p>
      </dd>
    </dl>
  )
};

export default Task4;
