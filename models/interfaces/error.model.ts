import { ErrorEnum } from "../enums/errors.enum";

export interface StandartError {
  code: number;
  type: ErrorEnum;
  message: string;
}