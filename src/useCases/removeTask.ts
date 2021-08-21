import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks";

export default (databaseAdapter: DatabaseAdapter, params: string): Promise<unknown> => {
  return databaseAdapter.remove(Task, params);
}