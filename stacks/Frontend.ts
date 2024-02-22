import { StackContext, StaticSite } from "sst/constructs";

export function Frontend({ stack }: StackContext) {
  const web = new StaticSite(stack, "StaticSite", {
    path: "packages/app",
    buildCommand: "npm run build",
    buildOutput: "build",
    customDomain: {
      domainName: "todoapp.jpacheco.dev",
      hostedZone: "jpacheco.dev",
    },
    environment: {
      REACT_APP_API_URL_SERVERLESS: "https://api-lambda.todoapp.jpacheco.dev",
      REACT_APP_API_URL: "https://api.todoapp.jpacheco.dev",
    },
  });

  stack.addOutputs({
    urlWebsite: web.url,
  });
}
