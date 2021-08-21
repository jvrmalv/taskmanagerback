import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

export default (databaseAdapter: DatabaseAdapter, params: string): Promise<Task | undefined> => {
  return databaseAdapter.read(Task, params)
}