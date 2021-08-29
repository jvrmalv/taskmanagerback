import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

// Typing for the params Object
export type CreateParams = {
  name: string,
  completed: boolean,
}
// This usecase will accept the ORM adapter and the params for creation of the task
export default (databaseAdapter: DatabaseAdapter, params: CreateParams): Promise<Task> => {
  return databaseAdapter.create<CreateParams, Task>(Task, params);
}