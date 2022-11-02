import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 4000

app.get('/', (_req: Request, res: Response) => {
  return res.send('hello from Bleue Auth Service')
})

app.listen(PORT, () => {
  console.log(`Auth Service running at PORT ${PORT}`)
})
