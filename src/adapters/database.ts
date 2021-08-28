import { Connection, createConnection, InsertResult, UpdateResult, ILike, FindOperator } from "typeorm";
import { QueryParams } from "../useCases/listTasks";
// Typing for the return of the exported function
export type DatabaseAdapter = {
  create<U, T = unknown>(entity: new () => T, params: U): Promise<T>,
  read<T = unknown>(entity: new () => T, id: string): Promise<T | undefined>,
  list<T = unknown>(entity: new () => T, queryParams: QueryParams): Promise<T[]>,
  update<U, T = unknown>(entity: new () => T, id: string, payload: U): Promise<T>,
  remove<T = unknown>(entity: new () => T, id: string): Promise<unknown>
}

// Typing for case insentive options object in the find() TypeORM function
type ILIKEQueryParams = {
  [key in keyof QueryParams]: FindOperator<string> | string | boolean | undefined
}

// This function will accept Typeorm Connection object and render an object containing functions for all necessary operations, abstracting the use of TypeORM
export default (connection: Connection): DatabaseAdapter => {
  return {
    create: <U, T = unknown>(entity: new () => T, params: U): Promise<T> => {
      return connection.manager
        .insert(entity, params)
        .then((insertResult: InsertResult) => insertResult.generatedMaps[0] as T);
    },
    read: (entity, id) => {
      return connection.manager.findOne(entity, id)
    },
    list: (entity, queryParams) => {
      const iLikeQueryParams = {
        order: {
          id: "ASC"
        },
        where: Object.entries(queryParams)
          .reduce((acc, curr): ILIKEQueryParams => {
            if (curr[0] === "completed") {
              return { ...acc, [curr[0]]: curr[1] }
            }
            else {
              return { ...acc, [curr[0]]: ILike(curr[1]) }
            }
          }, {}),
      }
      console.log(iLikeQueryParams)
      return connection.manager.find(entity, iLikeQueryParams);
    },
    update: <U, T = unknown>(entity: new () => T, id: string, payload: U): Promise<T> => {
      return connection.manager
        .update(entity, id, payload)
        .then((updateResult: UpdateResult) => updateResult.generatedMaps[0] as T);
    },
    remove: (entity, id) => {
      return connection.manager.delete(entity, id);
    }
  };
}