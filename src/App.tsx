import React, {useEffect, useState} from 'react';
import './App.css';
import {Todo} from './features/todo/Todo';
import {AddField} from './components/AddField/AddField';
import {ITodo} from './types/interfaces';
import {todosAPI} from './api/todos-api';

export const App: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = () => {
        todosAPI
            .fetchTodos()
            .then(res => setTodos(res))
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="App">
            <AddField fetchTodos={fetchTodos}/>
            {
                todos.map((i: ITodo) =>
                    <Todo
                        key={i._id}
                        _id={i._id}
                        title={i.title}
                        description={i.description}
                        fetchTodos={fetchTodos}
                    />)
            }
        </div>
    );
};
