"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Vue = require("nativescript-vue");
const App_1 = tslib_1.__importDefault(require("./components/App"));
global.window = {};
const typeorm = tslib_1.__importStar(require("typeorm/browser"));
console.log(" = = = = = = = = = = ");
console.log(" = = = = = = = = = = ");
console.log(" = = = = = = = = = = ");
console.log(" = = = = = = = = = = ");
console.log(typeorm);
typeorm.createConnection({
    database: 'test.db',
    type: 'nativescript'
}).then((connection) => {
    console.log("Connection Created");
}).catch((err) => console.log(err));
new Vue({
    render: h => h(App_1.default),
}).$start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQXlDO0FBQ3pDLG1FQUFrQztBQUtsQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtBQUNsQixpRUFBMkM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7QUFFcEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ3JCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLElBQUksRUFBRSxjQUFjO0NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFMUMsSUFBSSxHQUFHLENBQUM7SUFDSixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBRyxDQUFDO0NBQ3RCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdnVlJyk7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5cbmRlY2xhcmUgdmFyIGdsb2JhbDogYW55XG50eXBlIEJ1ZmZlciA9IGFueVxuXG5nbG9iYWwud2luZG93ID0ge31cbmltcG9ydCAqIGFzIHR5cGVvcm0gZnJvbSBcInR5cGVvcm0vYnJvd3NlclwiO1xuY29uc29sZS5sb2coXCIgPSA9ID0gPSA9ID0gPSA9ID0gPSBcIilcbmNvbnNvbGUubG9nKFwiID0gPSA9ID0gPSA9ID0gPSA9ID0gXCIpXG5jb25zb2xlLmxvZyhcIiA9ID0gPSA9ID0gPSA9ID0gPSA9IFwiKVxuY29uc29sZS5sb2coXCIgPSA9ID0gPSA9ID0gPSA9ID0gPSBcIilcbmNvbnNvbGUubG9nKHR5cGVvcm0pXG5cbnR5cGVvcm0uY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgZGF0YWJhc2U6ICd0ZXN0LmRiJyxcbiAgICB0eXBlOiAnbmF0aXZlc2NyaXB0J1xufSkudGhlbigoY29ubmVjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiBDcmVhdGVkXCIpXG59KS5jYXRjaCgoZXJyOiBFcnJvcikgPT4gY29uc29sZS5sb2coZXJyKSlcblxubmV3IFZ1ZSh7XG4gICAgcmVuZGVyOiBoID0+IGgoQXBwKSxcbn0pLiRzdGFydCgpO1xuIl19