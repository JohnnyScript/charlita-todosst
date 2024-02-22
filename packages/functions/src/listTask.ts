import { ApiHandler } from "sst/node/api";
import { listAllTaks } from "@todoAppSst/core/todoService";

export const handler = ApiHandler(async (_evt) => {
  const list = await listAllTaks();
  return {
    body: JSON.stringify(list),
    statusCode: 200,
  };
});
