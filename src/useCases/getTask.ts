import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

// This use case will accept the ORM adapter and the ID of given task
export default (databaseAdapter: DatabaseAdapter, params: string): Promise<Task | undefined> => {
  return databaseAdapter.read(Task, params)
}