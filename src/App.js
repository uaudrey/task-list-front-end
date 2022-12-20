import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const BaseUrl = 'https://task-list-api-c17.herokuapp.com';

// helper function focusing on API request
const getAllTasksApi = () => {
  return axios
    .get(`${BaseUrl}/tasks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const App = () => {
  const [tasksData, setTasksData] = useState([]);

  // add helper in component and effect
  const getAllTasks = () => {
    return getAllTasksApi().then((tasks) => setTasksData(tasks));
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasksData} />}</div>
      </main>
    </div>
  );
};

export default App;
