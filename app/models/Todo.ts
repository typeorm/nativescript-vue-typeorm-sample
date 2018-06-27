import {Entity, PrimaryGeneratedColumn, Column} from "typeorm/browser";

@Entity()
export default class Todo {
    @PrimaryGeneratedColumn('increment')
    id?: number;

    @Column()
    task: string;

    @Column()
    done: boolean;
    constructor(task, done) {
        this.task = task
        this.done = done
    }

}