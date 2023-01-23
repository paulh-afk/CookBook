import express = require('express');
const app: express.Application = express();
const port: number = 5000;

app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello, world!');
});

app.listen(port);
