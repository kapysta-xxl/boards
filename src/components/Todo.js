import React from 'react';
import { Link } from 'react-router-dom';
import { TODO_ROUTE } from '../utils/constants';
import '../scss/todo.scss';

function Todo ({ todo }) {
    return (
        <div className='todo'>
            <Link to={TODO_ROUTE + "/" + todo.id}>{ todo.descr }</Link>
            <div className='todo__footer'>
                <span className={`todo__priority-icon todo__priority-icon-${todo.priority.status}`}></span>
                <span className='todo__priority-number'> <span>{ todo.priority.points }</span> </span>
                <span className='todo__title'>{ todo.title }</span>
            </div>
        </div>
    );
}

export default Todo;