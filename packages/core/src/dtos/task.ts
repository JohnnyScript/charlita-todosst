export interface ICreateTaskDTO {
  id: string;
  title: string;
  description?: string;
}

export interface ITask {
  id: string;
  title: string;
  done: boolean;
  description?: string;
  createdAt: Date;
}
