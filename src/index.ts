import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser";

import { registrationRouter }  from './routes/registration';

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth/registration', registrationRouter);

app.listen(PORT, () => {
  console.log(`Auth Service running at PORT ${PORT}`)
})
