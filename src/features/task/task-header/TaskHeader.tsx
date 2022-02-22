import React from 'react';
import s from './TaskHeader.module.css';
import {Checkbox} from '../../../components/Checkbox/Checkbox';
import {IoCreateOutline, IoTrashSharp} from 'react-icons/io5';
import {tasksAPI} from '../../../api/tasks-api';

interface IProps {
    _id: string
    _todoId: string
    completed: boolean
    title: string
    created: Date
    fetchTasks: () => void
}

export const TaskHeader: React.FC<IProps> = props => {

    const {
        _id,
        _todoId,
        completed,
        title,
        created,
        fetchTasks
    } = props;

    const deleteTask = () => {
        tasksAPI
            .deleteTask(_todoId, _id)
            .then(() => fetchTasks());
    };

    return (
        <header className={s.taskHeader}>
            <div className={s.taskHeader__content}>
                <Checkbox
                    checked={completed}
                    label={title}
                />
            </div>
            <div
                className={s.taskHeader__edit}>
                Created: {created}
                <button
                    className={s.taskHeader__addTask_button}>
                    <IoCreateOutline/>
                    Edit task
                </button>
                <button
                    className={s.taskHeader__addTask_button}>
                    <IoCreateOutline/>
                    Add description
                </button>
                <button
                    onClick={deleteTask}
                    className={s.taskHeader__addTask_button}>
                    <IoTrashSharp/>
                    Delete task
                </button>
            </div>
        </header>
    );
};