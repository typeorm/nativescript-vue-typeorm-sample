import Vue from 'nativescript-vue'
import App from './components/App'
import 'nativescript-sqlite'

import {createConnection} from "typeorm/browser";

createConnection({
    database: 'test.db',
    type: 'nativescript'
}).then((connection) => {
    console.log("Connection Created")
}).catch((err: Error) => console.log(err))

Vue.config.silent = false

new Vue({
    render: h => h(App),
}).$start();
