import Vue from 'nativescript-vue'
import TaskItem from './TaskItem'
import Todo from "../models/Todo";

class App extends Vue {
    surprise: boolean
    newtask: string
    todos: Array<Todo>
    refreshTodos: () => void
}
export default Vue.extend<App>({
    data() {
        return {
            newtask: '',
            surprise: false,
            todos: [
                {task: 'First Task', done: false},
                {task: 'Second Task', done: true}
            ]
        };
    },
    mounted() {
        this.refreshTodos()
    },
    methods: {
        refreshTodos() {
            Todo.find().then((todos) => {
                console.log(todos)
                this.todos = todos
            }).catch(console.error)
        },

        addTodo() {
            const todo = new Todo(this.newtask, false);
            todo.save().then(() => this.refreshTodos())
                .catch(console.error)
        }
    },
    template: `
    <Page xmlns="http://schemas.nativescript.org/tns.xsd" class="page">
      <ActionBar class="action-bar" title="NativeScript-Vue"/>
      <StackLayout class="todo-list-container">
        <TextField v-model="newtask" hint="New Task" id="newtask"></TextField>
        <Button @tap="addTodo" text="ADD TASK"></Button>
        <ListView id="todolist" for="todo in todos">
            <v-template>
                <TaskItem :todo="todo" @requestRefresh="refreshTodos"></TaskItem>
            </v-template>
        </ListView>
      </StackLayout>
      
    </Page>
  `,
    components: {
        TaskItem
    },
})
