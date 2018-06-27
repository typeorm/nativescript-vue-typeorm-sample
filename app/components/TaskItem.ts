import Vue from 'nativescript-vue'
import Todo from "~/models/Todo";

class TaskItem extends Vue {
    todo: Todo
}

export default Vue.extend<TaskItem>({
    props: ['todo'],
    methods: {
        created() {
            console.log(this.todo)
        }
    },
    template: `
<StackLayout class="task-item" orientation="horizontal" xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label class="task-item-task" :text="todo.task"></Label>
</StackLayout>
    `
})