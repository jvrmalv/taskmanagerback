import { Task } from "./../entity/tasks";
import express, { Router, Request, Response } from "express";
import { Connection } from "typeorm";
import databaseAdapterConstructor from "../adapters/database";
import createTask, {
  CreateParams as TaskCreateParams,
} from "../useCases/createTask";
import listTasks from "../useCases/listTasks";
import getTask from "../useCases/getTask";
import removeTask from "../useCases/removeTask";
import updateTask, { UpdateParams } from "../useCases/updateTask";

export default (connection: Connection): Router => {
  const router: Router = express.Router();
  const databaseAdapter = databaseAdapterConstructor(connection);

  router.get("/", (req: Request, res: Response) => {
    listTasks(databaseAdapter).then((tasks) => {
      res.json(tasks);
    });
  });

  router.get("/:id", (req: Request, res: Response) => {
    getTask(databaseAdapter, req.params.id).then((todo) => res.json(todo));
  });

  router.post("/", async (req: Request, res: Response) => {
    const { name, completed } = req.body;
    const params: TaskCreateParams = { name, completed };
    createTask(databaseAdapter, req.body).then((task) => {
      res.json(task);
    });
  });

  router.delete("/:id", (req: Request, res: Response) => {
    removeTask(databaseAdapter, req.params.id).then((msg) => {
      res.json(msg);
    });
  });

  router.put("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, completed } = req.body;
    const params: UpdateParams = { id, name, completed };
    updateTask(databaseAdapter, params).then((task) => {
      res.json(task);
    });
  });
  return router;
};
