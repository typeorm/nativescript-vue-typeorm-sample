import Vue from 'nativescript-vue'
import App from './components/App'
import 'nativescript-sqlite'

import {createConnection, getManager} from "typeorm/browser";

import Todo from '~/models/Todo';

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

        await connection.synchronize(false)

        console.log("Synchronized")


    } catch (err) {
        console.error(err)
    }
})();



Vue.config.silent = false

new Vue({
    render: h => h(App),
}).$start();
