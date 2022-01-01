import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import Form from '../components/Form/Form';

function TodoPage() {
    const params = useParams()
    const [todo, setTodo] = useState('')
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        
        api.get('/todos/' + params.id)
        .then(res => {
            setTodo(res.data)
        })
        .catch(e => console.log(e))
    }, [params.id])

    const editHandler = (e) => {
        e.preventDefault()
        setEdit(true)
    }

    const save = (data) => {
        console.log(data)
        let title = data.title || todo.title;
        let status = data.status === "" ? todo.status : data.status;
        let priority = data.priority === "" ? todo.priority.status : data.priority;
        let descr = data.description === "" ? todo.descr : data.description;
        let points = !Number.isInteger(data.points) ? todo.priority.points : data.points;

        const newTodo = {
            id: todo.id,
            priority: {
                status: priority,
                points: points
            },
            title,
            status,
            descr
        }
        setTodo(newTodo)
        setEdit(false)

        api.put('/todos/' + todo.id, newTodo)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }

    return (
        <>
        { !edit && 
            <div className='todo-info'>
                <span className='todo-info__title'>{ todo.title }</span>
                <p className='todo-info__descr'>{ todo.descr }</p>
                <div className='todo-info__footer'>
                    <span className='todo-info__status'>Status: { todo.status }</span>
                    <button 
                    className='todo-info__edit-btn' 
                    type='submit'
                    onClick={editHandler}
                    >Edit</button>
                </div>
            </div>
        }
        { edit && <Form submitHandler={save}/> }
        </>
    );
}

export default TodoPage;