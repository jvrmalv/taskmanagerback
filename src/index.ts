import { createConnection, Connection} from "typeorm"
import Express from "express"
import cors from "cors"
import taskController from "./controller/taskController"

const app = Express()


createConnection().then(
  (connection: Connection) => {
    app.use(cors())
    app.use(Express.json())

    const port = 3000
    const todoRouter = taskController(connection)

    app.use("/task", todoRouter)

    app.listen(port, async () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }
)

