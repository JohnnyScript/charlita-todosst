import { StackContext, Service, Queue, Function, Api } from "sst/constructs";

export function Backend({ stack }: StackContext) {
  const queue = new Queue(stack, "queue");

  queue.addConsumer(stack, {
    function: new Function(stack, "consumer", {
      handler: "packages/functions/src/consumer.handler",
      environment: {
        URL_MONGO: process.env.URL_MONGO!,
      },
    }),
  });

  const api = new Service(stack, "api", {
    path: "packages/api",
    port: 3000,
    cpu: "1 vCPU",
    memory: "2 GB",
    bind: [queue],
    environment: {
      QUEUE_URL: queue.queueUrl,
    },
    customDomain: {
      domainName: "api.todoapp.jpacheco.dev",
      hostedZone: "jpacheco.dev",
    },
  });

  const apiServerless = new Api(stack, "apiServerless", {
    routes: {
      "GET /tasks": new Function(stack, "listTask", {
        handler: "packages/functions/src/listTask.handler",
        environment: {
          URL_MONGO: process.env.URL_MONGO!,
        },
      }),
      "GET /": "packages/functions/src/health.handler",
    },
    customDomain: {
      domainName: "api-lambda.todoapp.jpacheco.dev",
      hostedZone: "jpacheco.dev",
    },
  });

  stack.addOutputs({
    queueUrl: queue.queueUrl,
    apiUrl: api.url,
    apiServerlessUrl: apiServerless.url,
  });
}
