import { SSTConfig } from "sst";
import { Backend } from "./stacks/Backend";
import { Frontend } from "./stacks/Frontend";

export default {
  config(_input) {
    return {
      name: "todo-app-sst",
      region: "us-east-1",
      stage: "dev",
    };
  },
  stacks(app) {
    app.stack(Backend);
    app.stack(Frontend);
  },
} satisfies SSTConfig;
