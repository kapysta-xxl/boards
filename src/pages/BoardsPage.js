import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import Todo from '../components/Todo';
import '../scss/boards.scss';
import '../scss/flexbox-grid.scss';
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd';
import api from '../api/api';
import _ from 'lodash';

function BoardsPage() {
    const [boards, setBoards] = useState(false)

    const compare = (todos) =>{
        let newBoards = {
            "to do": {
                todos: []
            },
            "in progress": {
                todos: []
            },
            "test": {
                todos: []
            },
            "done": {
                todos: []
            }
        }

        for(let i = 0; i < todos.length; i++){
            let item = newBoards[todos[i].status];
        
            if(item){
                item.todos.push(todos[i])
            }
        }
        return setBoards(newBoards)
        // console.log(boards)
    }
    useEffect(() => {

      api.get('/todos')
      .then(res => compare(res.data))
      .catch(e => console.log(e))
    }, [])
    
    const dragEndHandler = ({ destination, source }) => {
        // console.log(destination)
        // console.log(source)
        if (!destination) {
          // console.log('перетащили не в зону для дропа')
          return;
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId){
          // console.log('если вызвали событие и отменили перетаскивание')
          return;
        }
        
        let current = {...boards[source.droppableId].todos[source.index]};//текущий todo - которого перетаскивали
        setBoards(prev => {
            prev = {...prev}
            prev[source.droppableId].todos.splice(source.index, 1);//удаление текущего todo
            prev[destination.droppableId].todos.splice(destination.index, 0, current);//добавление текущего todo

            return prev;
        })

        api.put('/todos/' + current.id, {
            ...current,
            status: destination.droppableId
        })
        .catch(e => console.log(e))

      }

    return (
        <div className='boards'>
            <div className='boards__title'>
                <h1>issue Boards</h1>
                <Link to="/create">New issue</Link>
            </div>
            <Search compare={compare}/>
            <div className='flexbox-grid'>
                <div className='row'>
                <DragDropContext onDragEnd={dragEndHandler}>
                        { _.map(boards, (board, key) => (
                            <div key={ key } className="col col-xl-3 col-lg-6 col-xs-12">
                            <div className='boards-column'>
                                <div className='boards-column__title'>{ key }</div>
                                    <Droppable droppableId={ key }>
                                        { provided => (
                                            <ul className='todo-list'
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            >
                                            { board.todos.length > 0 && board.todos.map((todo, index) => (
                                                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                                    {(provided, snapshot) => (
                                                        <li 
                                                        className={snapshot.isDragging ? 'todo-wrapper dragging' : 'todo-wrapper'}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        >
                                                        <Todo todo={todo}/>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))  }
                                            {provided.placeholder}
                                            </ul>
                                        )}
                                    </Droppable>
                                </div>
                            </div>
                        ))}
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}

export default BoardsPage;