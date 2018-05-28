import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { TodoModel, TodoInterface } from '../models/todo.mongoose';

export class TodoControler {

    public static getAllTodos = (req: Request, res: Response, next: NextFunction) => {
        TodoModel.find({})
            .then(
                (todos: Array<TodoInterface>) => {
                    res.send(todos);
                }
            )
            .catch(
                err => next(err)
            )
    }

    public static createTodo = (req: Request, res: Response, next: NextFunction) => {
        const todo = new TodoModel(req.body);
        todo.save().then(
            (savedTodo: TodoInterface) => {
                res.send(savedTodo)
            }
        ).catch(
            err => next(err)
        )
    }

    public static deleteTodo = (req: Request, res: Response, next: NextFunction) => {
        TodoModel.findByIdAndRemove(req.params.id)
            .then(() => {
                res.status(200).send();
            })
            .catch(
                err => next(err)
            )
    }

    public static updateTodo = (req: Request, res: Response, next: NextFunction) => {
        TodoModel.findByIdAndUpdate(req.params.id, req.body)
            .then(
                (todo: TodoInterface) => {
                    res.send(todo);
                }
            )
            .catch(
                err => next(err)
            )
    }

}