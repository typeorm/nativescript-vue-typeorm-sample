import Vue from 'nativescript-vue'
import Todo from "~/models/Todo";

class TaskItem extends Vue {
    todo: Todo
}

export default Vue.extend<TaskItem>({
    props: ['todo'],
    methods: {
        async removeSelf() {
            if (this.todo.id) {
                await Todo.delete({id: this.todo.id})
                this.$emit('requestRefresh')
            }
        }
    },
    template: `
<StackLayout class="task-item" orientation="horizontal" xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label @tap="removeSelf" class="task-item-task" :text="todo.task"></Label>
</StackLayout>
    `
})