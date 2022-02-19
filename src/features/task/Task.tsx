import React, {ChangeEvent} from 'react';
import s from './Task.module.css';
import {IoClose} from 'react-icons/io5';
import {todosAPI} from '../../api/api';

export interface ITodo {
    _id: number
    title: string
    completed: boolean
    fetchTodos: () => void
}

export const Task: React.FC<ITodo> = props => {

    const {
        _id,
        title,
        completed,
        fetchTodos
    } = props;

    const checkedTodo = (e: ChangeEvent<HTMLInputElement>) => {
        todosAPI
            .checkedTodo(_id, title, e.target.checked)
            .then(() => fetchTodos());
    };

    const deleteTodo = () => {
        todosAPI
            .deleteTodo(_id)
            .then(() => fetchTodos());
    };

    return (
        <div className={s.task}>
            <input
                className={s.task__checkbox}
                type='checkbox'
                checked={completed}
                onChange={checkedTodo}
            />
            <span className={s.task__text}>
                {title}
            </span>
            <button
                className={s.task__button}
                onClick={deleteTodo}
            >
                <IoClose/>
            </button>
        </div>
    );
};