import React, {useEffect, useState} from 'react';
import s from './Todo.module.css';
import {IoCreateOutline, IoTrashSharp} from 'react-icons/io5';
import {ITask, ITodo} from '../../types/interfaces';
import {Task} from '../task/Task';
import {todosAPI} from '../../api/todos-api';
import {tasksAPI} from '../../api/tasks-api';

interface IProps extends ITodo {
    fetchTodos: () => void
}

export const Todo: React.FC<IProps> = props => {

    const {
        _id,
        title,
        description,
        fetchTodos
    } = props;

    const [tasks, setTasks] = useState([]);
    const [taskTitle, setTaskTitle] = useState('');

    const fetchTasks = () => {
        tasksAPI
            .fetchTasks(_id)
            .then(res => {
                setTasks(res);
            });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = () => {
        tasksAPI
            .createTask(_id, taskTitle, new Date(2022, 2, 22))
            .then(() => {
                fetchTasks();
                setTaskTitle('');
            });
    };

    const deleteTodo = () => {
        todosAPI
            .deleteTodo(_id)
            .then(() => fetchTodos());
    };

    return (
        <div className={s.todo}>
            <header className={s.todo__header}>
                <div className={s.todo__header_content}>
                    <h3 className={s.todo__text}>
                        {title}
                    </h3>
                    <div className={s.todo__header_buttons}>
                        <button
                            onClick={deleteTodo}
                            className={s.todo__header_delete_button}>
                            Edit title
                        </button>
                        <button
                            onClick={deleteTodo}
                            className={s.todo__header_delete_button}>
                            <IoTrashSharp/>
                            Delete to do list
                        </button>
                    </div>
                </div>
                <div className={s.todo__header_description}>
                    {description}
                </div>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button
                    className={s.todo__header_addTask_button}
                    onClick={addTask}>
                    <IoCreateOutline/>
                    Add task
                </button>
            </header>

            <div className={s.todo__tasks}>
                {
                    tasks.map((i: ITask) =>
                        <Task
                            key={i._id}
                            _id={i._id}
                            _todoId={i._todoId}
                            title={i.title}
                            description={i.description}
                            completed={i.completed}
                            created={i.created}
                            deadline={i.deadline}
                            fetchTasks={fetchTasks}
                        />)
                }
            </div>
        </div>

    );
};