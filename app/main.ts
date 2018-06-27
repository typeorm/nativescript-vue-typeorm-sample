import Vue from 'nativescript-vue'
import App from './components/App'
import 'nativescript-sqlite'

declare var global: any
type Buffer = any

global.window = {}
import * as typeorm from "typeorm/browser";
console.log(" = = = = = = = = = = ")
console.log(" = = = = = = = = = = ")
console.log(" = = = = = = = = = = ")
console.log(" = = = = = = = = = = ")
console.log(typeorm)

typeorm.createConnection({
    database: 'test.db',
    type: 'nativescript'
}).then((connection) => {
    console.log("Connection Created")
}).catch((err: Error) => console.log(err))

new Vue({
    render: h => h(App),
}).$start();
