# taskmanagerback
Task/todo management Node REST API
## Configuration
The `typeorm.json` file should configured as following:
```json 
{
    "type": "postgres",
    "host": "{HOST_IP: localhost by default}",
    "port": {DATABASE_PORT: 5432 by default},
    "username": "{POSTGRES_USER_HERE}",
    "password": "{USER_PASSWORD_HERE}",
    "database": "{NAME OF DATABASE: tasksdb by default}",
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.{js,ts}"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}
```
## Running
If migration is needed you shall use `yarn run migrate` on the command line, then, you can run `yarn install` and `yarn start` and application will start on `port:3000` 
