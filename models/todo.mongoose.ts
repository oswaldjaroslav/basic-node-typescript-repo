import { Document, Schema, Model, model } from 'mongoose';
import { Todo } from './interfaces/todo.interface';

export interface TodoInterface extends Document {
}

let TodoSchema: Schema = new Schema({
  message: {
    type: String,
    required: true
  },
  dateOfCreation: {
    type: String,
    required: true,
    default: Date.now()
  },
  dateOfNotification: Date
});

export const TodoModel: Model<TodoInterface> = model<TodoInterface>('Todo', TodoSchema);