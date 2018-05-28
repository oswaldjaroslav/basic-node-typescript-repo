import { Express } from 'express';
import { TodoControler } from './controlers/todos';

export const routes = (app: Express) => {

    // CRUD for todos

    app.post('/todo', TodoControler.createTodo);
    app.get('/todo', TodoControler.getAllTodos);
    app.delete('/todo/:id', TodoControler.deleteTodo);
}