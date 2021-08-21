import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

export default (databaseAdapter: DatabaseAdapter): Promise<Task[]> => {
  return databaseAdapter.list(Task);
}