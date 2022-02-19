import React, {useEffect, useState} from 'react';
import './App.css';
import {ITodo, Task} from './features/task/Task';
import {todosAPI} from './api/api';
import {AddField} from './components/AddField/AddField';

export const App = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = () => todosAPI.fetchTodos(setTodos);

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="App">
            <AddField fetchTodos={fetchTodos}/>
            {
                todos.map((i: ITodo) =>
                    <Task
                        key={i._id}
                        _id={i._id}
                        title={i.title}
                        completed={i.completed}
                        fetchTodos={fetchTodos}
                    />)
            }
        </div>
    );
};
