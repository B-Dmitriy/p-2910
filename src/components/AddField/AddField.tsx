import React, {ChangeEvent, useState} from 'react';
import s from './AddField.module.css';
import {todosAPI} from '../../api/api';

interface IProps {
    fetchTodos: () => void
}

export const AddField: React.FC<IProps> = props => {

    const {fetchTodos} = props;
    const [title, setTitle] = useState('');

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const addTodo = () => {
        todosAPI
            .addTodo(title)
            .then(() => {
                setTitle('')
                fetchTodos()
            });
    };

    return (
        <div className={s.addField}>
            <input
                className={s.addField__textArea}
                type="text"
                value={title}
                onChange={changeTitle}
            />
            <button
                className={s.addField__button}
                onClick={addTodo}
            >
                Add
            </button>
        </div>
    );
};