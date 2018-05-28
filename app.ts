import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import Axios, { AxiosResponse } from 'axios';
import { routes } from './router';
import { ErrorEnum } from './models/enums/errors.enum';
import { StandartError } from './models/interfaces/error.model';


const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-list-api';
mongoose.connect(mongoUrl);
const app = express();
app.use(bodyParser.json({type: '*/*'}));

routes(app);

// setInterval(() => {
//   Axios.get('https://govinda-recipes-api.herokuapp.com')
//     .then(
//       (response: AxiosResponse) => {
//         console.log('response: ', response.data);
//       }
//     )
//     .catch(
//       err => console.log(err)
//     )
// }, 300000)

// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send({
//     message: 'Im up and running'
//   })
// });


app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const errorName = error.name;
  Object.keys(ErrorEnum).forEach(i => {
    if (i === errorName) {
      const newError: StandartError = {
        code: 412,
        type: errorName,
        message: error.message
      };
      return res.status(412).send(newError);
    }
  });
  next(error);
})


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const port = process.env.PORT || 5050;
const server = http.createServer(app);
server.listen(port);
console.log('server is listening at port ' + port);