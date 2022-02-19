import {ITodo} from '../features/task/Task';

export const todosAPI = {

    fetchTodos(callback: (array: ITodo[]) => void) {

        fetch('http://localhost:8088/todos')
            .then((res: Response) => res.json())
            .then((res: ITodo[]) => callback(res));
    },

    addTodo(title: string) {

        const body = {title: title};

        return fetch('http://localhost:8088/todos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    },

    checkedTodo(id: number, title: string, completed: boolean) {

        const body = {title: title, completed: completed};

        return fetch(`http://localhost:8088/todos/${id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
        })
            .then(res => res.json());
    },

    deleteTodo(id: number) {

        return fetch(`http://localhost:8088/todos/${id}`, {
            method: 'DELETE'
        })
            .then(() => {});
    },
};