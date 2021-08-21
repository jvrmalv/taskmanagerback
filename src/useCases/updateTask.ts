import { DatabaseAdapter } from "../adapters/database";
import { Task } from "../entity/tasks"

type Payload = {
  name?: string,
  completed?: boolean 
}

export type UpdateParams = Payload & {
  id: string,
}

export default (databaseAdapter: DatabaseAdapter, params: UpdateParams): Promise<Task> => {
  const { id, ...payload } = params;
  return databaseAdapter.update<Payload, Task>(Task, id, payload);
}