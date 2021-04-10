// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';

const app = express();

const {
  PORT = 3000,
} = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world! by CrgioPeca88',
  });
});

app.listen(PORT, () => {
  console.log(`====================================`);
  console.log('> Server started at http://localhost:' + PORT);
  console.log(`====================================`)
});
