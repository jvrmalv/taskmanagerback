import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

// This is typing for the query object
export type QueryParams = {
  id?: string
  name?: string
  completed?: boolean
}
// This usecase will accept the ORM adapter and the Query object so it can list all relevant tasks
export default (databaseAdapter: DatabaseAdapter, queryParams: QueryParams): Promise<Task[]> => {
  return databaseAdapter.list(Task, queryParams);
}