import React from 'react';

const Task3 = () => {
  const search = window.location.hash.slice(window.location.hash.indexOf('?'));
  let searchObject = 0;

  if (search.length !== 0) {
    searchObject = JSON.parse('{"' + search
      .replace(/&/g, '","')
      .replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value)
      });
  }

  return (
    <dl>
      <dt>Task 3</dt>
      <dd>
        Write script that will parse query params from url and transform it into object with according key and value.
      </dd>
      <dt>Solution</dt>
      <dd>
        {searchObject
        ? <span className="task3__object">
            {Object.keys(searchObject).map(key => <p key={key}>{key} : {searchObject[key]}</p>)}
          </span>
        : 'Search params is empty'}
      </dd>
    </dl>
  )
};

export default Task3;
