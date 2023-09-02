import commandRouter from "./commandRouter";

const bootstrap = () => {
  const executionArguments = process.argv.slice(2);
  const [command, ...additionalArguments] = executionArguments;
  commandRouter(command, additionalArguments);
};

bootstrap();
