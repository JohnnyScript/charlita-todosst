export * as TodoService from "./todoService";

import { TaskModel } from "./database";
import { ICreateTaskDTO } from "./dtos/task";

export async function saveTask(data: ICreateTaskDTO) {
  try {
    const task = new TaskModel(data);
    await task.save();
  } catch (error) {
    console.log("🚀 ~ saveTask ~ error:", error);
  }
}

export function listAllTaks() {
  return TaskModel.find();
}
