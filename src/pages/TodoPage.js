import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/api';

import EditForm from '../components/EditForm';

function TodoPage() {
    const params = useParams()
    const [todo, setTodo] = useState('')
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        
        api.get('/todos/' + params.id)
        .then(res => {
            setTodo(res.data)
            console.log(res)//тут должно быть обновление хлебных крошек
        })
        .catch(e => console.log(e))
    }, [params.id])

    const editHandler = (e) => {
        e.preventDefault()
        setEdit(true)
    }

    const save = (newTitle) => {
        setEdit(false)
        setTodo({
            ...todo,
            title: newTitle
        })

        api.put('/todos/' + todo.id, {
            ...todo,
            title: newTitle
        })
        .then(res => console.log(res))
        .catch(e => console.log(e))
    }

    return (//дописать task , и импортировать стили
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
            { edit && <EditForm saveHandler={ save } /> }
        </div>
    );
}

export default TodoPage;