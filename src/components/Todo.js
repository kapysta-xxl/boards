import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TODO_ROUTE } from '../utils/constants';
import '../scss/todo.scss';

function Todo ({ todo }) {
    const [iconClases, setIconClases] = useState('todo__priority-icon');
    
    useEffect(() => {
        if(todo.priority.status === 'critical') return setIconClases((prev) => prev += ' todo__priority-icon-critical');
        if(todo.priority.status === 'major') return setIconClases((prev) => prev += ' todo__priority-icon-major');
        if(todo.priority.status === 'normal') return setIconClases((prev) => prev += ' todo__priority-icon-normal');
        if(todo.priority.status === 'minor') return setIconClases((prev) => prev += ' todo__priority-icon-minor');
        if(todo.priority.status === 'none') return setIconClases((prev) => prev += ' todo__priority-icon-none');
    }, [todo])

    return (
        <div className='todo'>
            <Link to={TODO_ROUTE + "/" + todo.id}>{ todo.descr }</Link>
            <div className='todo__footer'>
                <span className={ iconClases }></span>
                <span className='todo__priority-number'> <span>{ todo.priority.points }</span> </span>
                <span className='todo__title'>{ todo.title }</span>
            </div>
        </div>
    );
}

export default Todo;