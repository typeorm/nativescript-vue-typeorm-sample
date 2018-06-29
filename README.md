# NativeScript Vue TypeORM Sample

Okay let's break this down

 - **NativeScript** : Runs Javascript as Native apps on Android and iOS
 - **VueJS**: A frontend framework that can be used in NativeScript (Angular is possible too)
 - **nativescript-sqlite**: A Sqlite library for {N}, used here as the Sqlite driver
 - **TypeORM**: A TypeScript/ES7 based ORM that works on NodeJS as well as browsers

## Demo
As you can see the task list is persisted even when the app
is killed and reopened.

![demo](docs/demo.gif)


## Setting this up

Okay so the TL;DR version is this -

 - **Setup a NativeScript project**

    This creates a NativeScript-Vue app
    ```
    tns create nativescript-sample --template nativescript-vue-template
    ```

    Feel free to use NativeScript without any frontend framework, or with
    Angular. All the same. TypeORM will work everywhere

 - **Make sure you are _webpack_-ing your project.**

    TypeORM's browser library is in ES7 (with `import/export` statements)
    This is something that cannot be executed directly in NativeScript
    (At least not untill we have a JavascriptCore or V8 that start supporting it)

    So please make sure you are using {N} in bundle mode

    ```
    tns install webpack
    ```

    When running the project, always use bundle mode

    ```
    tns run ios --bundle
    ```
 - **Install the _nativescript-sqlite_ plugin**

    Please make sure you install it as a tns plugin and not _just_ npm install

    ```
    tns plugin add nativescript-sqlite
    ```

 - **Install TypeORM**

    ```
    npm install typeorm
    ```

At this stage you are ready to use TypeORM.
Please read the documentation on <http://typeorm.io>

TypeORM can be used with/without a repository and it can be used
in `DataMapper` fashion or `ActiveRecord` fashion. Please do whatever
feels comfortable. Everything is supported.

## Trying things out quickly

### 1. Setup TypeORM somewhere your app starts

I have done this in the [app/main.ts](main.ts) file. You should ideally do this
wherever your app is initialised.

```typescript
import {createConnection, getManager} from "typeorm/browser";
import Todo from './models/Todo';

(async () => {
    try {
        const connection = await createConnection({
            database: 'test.db',
            type: 'nativescript',
            entities: [
                Todo
            ],
            logging: true
        })

        console.log("Connection Created")

        // setting true will drop tables and recreate
        await connection.synchronize(false) 

        console.log("Synchronized")


    } catch (err) {
        console.error(err)
    }
})();
```

### 2. Define your model

I am using ActiveRecord. If you want to use DataMapper, you should
_**not**_ extend from BaseEntitiy

```typescript
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";

@Entity()
export default class Todo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    task: string;

    @Column()
    done: boolean;

    constructor(task: string, done: boolean) {
        super();
        this.task = task;
        this.done = done;
    }

}
```

### 3. Use the entities in your app

You can check out [app/components/App.ts](App.ts)

```typescript
import Todo from "./models/Todo";

function refreshTodos() {
     Todo.find().then((todos) => {
         console.log(todos)
         this.todos = todos
     }).catch(console.error)
 }
function addTodo() {
    const todo = new Todo(this.newtask, false);
    todo.save().then(() => this.refreshTodos())
        .catch(console.error)
}
```

