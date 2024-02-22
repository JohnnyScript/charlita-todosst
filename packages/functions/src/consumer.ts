import { SQSEvent } from "aws-lambda";
import { TodoService } from "@todoAppSst/core/todoService";
import { ICreateTaskDTO } from "@todoAppSst/core/dtos/task";

export const handler = async (evt: SQSEvent) => {
  const body = evt.Records
    ? evt.Records?.map((msg) => JSON.parse(msg.body) as ICreateTaskDTO)
    : undefined;
  if (!body) {
    return {
      statusCode: 400,
      body: "Bad request",
    };
  }

  await Promise.all(body.map((task) => TodoService.saveTask(task)));

  return {
    statusCode: 200,
    body: "Todo created",
  };
};
