import {instance} from './api';

export const todosAPI = {

    fetchTodos() {
        return instance
            .get('/todos')
            .then(res => res.data)
            .catch(err => err.message);
    },

    createTodo(title: string) {
        return instance
            .post('/todos', {title})
            .then(res => res.data)
            .catch(err => err.message);
    },

    updateTodo(todoId: string, title: string, description: string) {
        return instance
            .put(`/todos/${todoId}`, {title, description})
            .then(res => res.data)
            .catch(err => err.message);
    },

    deleteTodo(todoId: string) {
        return instance
            .delete(`/todos/${todoId}`)
            .then(res => res.data)
            .catch(err => err.message);
    }
};