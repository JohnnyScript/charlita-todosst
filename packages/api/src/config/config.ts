export default () => ({
  queueUrl: process.env.QUEUE_URL,
  port: parseInt(process.env.PORT, 10) || 3000,
});
