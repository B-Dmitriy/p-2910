import React from 'react';
import s from './Task.module.css';
import {TaskDescription} from './task-description/TaskDescription';
import {TaskHeader} from './task-header/TaskHeader';

interface IProps {
    _id: string,
    _todoId: string,
    title: string,
    description: string[],
    completed: boolean,
    created: Date,
    deadline: Date
    fetchTasks: () => void
}

export const Task: React.FC<IProps> = props => {

    const {
        _id,
        _todoId,
        title,
        description,
        completed,
        created,
        deadline,
        fetchTasks
    } = props;

    return (
        <div className={s.task}>
            <TaskHeader
                _id={_id}
                _todoId={_todoId}
                title={title}
                completed={completed}
                created={created}
                fetchTasks={fetchTasks}
            />
            <ul className={s.task__list}>
                {
                    description.map(i => <TaskDescription key={i} title={i}/>)
                }
            </ul>
            <div
                className={s.task__deadline}
            >
                Must be completed by: {deadline}
            </div>
        </div>
    );
};