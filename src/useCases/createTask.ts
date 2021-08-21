import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

export type CreateParams = {
  name: string,
  completed: boolean,
}

export default (databaseAdapter: DatabaseAdapter, params: CreateParams): Promise<Task> => {
  return databaseAdapter.create<CreateParams, Task>(Task, params);
}