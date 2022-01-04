import React from 'react';
import Form from '../components/Form/Form';
import api from '../api/api';

function CreatePage() {
  const submitHandler = (data) => {
    if (!data.title) return;

    let id = Math.random().toString().slice(14);
    let title = data.title;
    let status = data.status === '' ? 'to do' : data.status;
    let priority = data.priority === '' ? 'minor' : data.priority;
    let descr = data.description || '';
    let points = !Number.isInteger(+data.points) ? 1 : +data.points;

    const newTodo = {
      id,
      priority: {
        status: priority,
        points: points,
      },
      title,
      status,
      descr,
    };

    api.post('/todos', newTodo).catch((e) => console.log(e));
  };

  return <Form submitHandler={submitHandler} />;
}

export default CreatePage;
