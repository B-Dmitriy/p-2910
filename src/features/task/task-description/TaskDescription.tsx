import React from 'react';
import s from './TaskDescription.module.css';
import {IoTrash, IoInformationCircleOutline} from 'react-icons/io5';

interface IProps {
    title: string
}

export const TaskDescription: React.FC<IProps> = props => {

    const {title} = props;

    return (
        <li className={s.taskDescription}>
            <IoInformationCircleOutline className={s.taskDescription__icon}/>
            <p className={s.taskDescription__text}>{title}</p>
            <button className={s.taskDescription__button}><IoTrash/></button>
        </li>
    );
};