import { createConnection, Connection} from "typeorm"
import Express from "express"
import cors from "cors"
import taskController from "./controller/taskController"

const app = Express()


createConnection().then(
  (connection: Connection) => {
    //Middleware for both handling cors and parsing JSON 
    app.use(cors())
    app.use(Express.json())

    const port = 3000
    const todoRouter = taskController(connection)

    //This middleware will handle the routes.
    app.use("/task", todoRouter)

    app.listen(port, async () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }
)

