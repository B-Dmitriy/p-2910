import {instance} from './api';

export const tasksAPI = {

    fetchTasks(todoId: string) {
        return instance
            .get(`/tasks/${todoId}`)
            .then(res => res.data)
            .catch(err => err.message);
    },

    createTask(todoId: string, title: string, deadline: Date) {
        return instance
            .post(`/tasks/${todoId}`, {title, deadline})
            .then(res => res.data)
            .catch(err => err.message);
    },

    updateTask(todoId: string, id: string, title: string, completed: boolean, deadline: Date, description: string[]) {
        return instance
            .put(`/tasks/${todoId}/${id}`, {title, completed, deadline, description})
            .then(res => res.data)
            .catch(err => err.message);
    },

    deleteTask(todoId: string, id: string) {
        return instance
            .delete(`/tasks/${todoId}/${id}`)
            .then(res => res.data)
            .catch(err => err.message);
    }
};