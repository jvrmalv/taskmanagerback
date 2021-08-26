import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

export type QueryParams = {
  id?: string
  name?: string
  completed?: boolean
}

export default (databaseAdapter: DatabaseAdapter, queryParams: QueryParams): Promise<Task[]> => {
  return databaseAdapter.list(Task, queryParams);
}