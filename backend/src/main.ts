// Dependencies
import * as express from 'express';
import { Request, Response } from 'express';

// Assets
//import { PORT } from '@config/constants';
import { PORT } from './config/constants';

const app = express();

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
