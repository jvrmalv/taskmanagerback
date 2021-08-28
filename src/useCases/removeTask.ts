import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks";

// This usecase accepts the ORM adapter and the ID for given task wanted for deletion
export default (databaseAdapter: DatabaseAdapter, params: string): Promise<unknown> => {
  return databaseAdapter.remove(Task, params);
}