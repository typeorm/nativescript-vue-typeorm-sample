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