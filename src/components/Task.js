import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import './Task.css';

const Task = ({ id, title, isComplete }) => {
  const [completed, setCompleted] = useState(isComplete);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  const toggleClass = completed
    ? 'tasks__item__toggle'
    : 'tasks__item__toggle--completed';

  return (
    <li className="tasks__item">
      <button onClick={toggleComplete} className={toggleClass}>
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
