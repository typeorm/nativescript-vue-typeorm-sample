"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nativescript_vue_1 = tslib_1.__importDefault(require("nativescript-vue"));
const Counter_1 = tslib_1.__importDefault(require("./Counter"));
class App extends nativescript_vue_1.default {
}
exports.default = nativescript_vue_1.default.extend({
    data() {
        return {
            surprise: false,
        };
    },
    template: `
    <Page class="page">
      <ActionBar class="action-bar" title="NativeScript-Vue"/>
  
      <StackLayout>
        <Counter />
      
        <Label class="p-20" textWrap=true text="This is a hello world application, tap the button if you dare"/>
      
        <Button class="btn btn-primary" @tap="surprise = !surprise" text="Tap me!"/>
        <Image v-if="surprise" class="m-20" src="~/images/NativeScript-Vue.png"/>
      </StackLayout>
    </Page>
  `,
    components: {
        Counter: Counter_1.default,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdGQUFrQztBQUNsQyxnRUFBK0I7QUFFL0IsU0FBVSxTQUFRLDBCQUFHO0NBRXBCO0FBQ0Qsa0JBQWUsMEJBQUcsQ0FBQyxNQUFNLENBQU07SUFDM0IsSUFBSTtRQUNBLE9BQU87WUFDSCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0lBQ04sQ0FBQztJQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFYO0lBQ0MsVUFBVSxFQUFFO1FBQ1IsT0FBTyxFQUFQLGlCQUFPO0tBQ1Y7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL0NvdW50ZXInXG5cbmNsYXNzIEFwcCBleHRlbmRzIFZ1ZSB7XG4gICAgc3VycHJpY2U6IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQ8QXBwPih7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN1cnByaXNlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgICA8QWN0aW9uQmFyIGNsYXNzPVwiYWN0aW9uLWJhclwiIHRpdGxlPVwiTmF0aXZlU2NyaXB0LVZ1ZVwiLz5cbiAgXG4gICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgIDxDb3VudGVyIC8+XG4gICAgICBcbiAgICAgICAgPExhYmVsIGNsYXNzPVwicC0yMFwiIHRleHRXcmFwPXRydWUgdGV4dD1cIlRoaXMgaXMgYSBoZWxsbyB3b3JsZCBhcHBsaWNhdGlvbiwgdGFwIHRoZSBidXR0b24gaWYgeW91IGRhcmVcIi8+XG4gICAgICBcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEB0YXA9XCJzdXJwcmlzZSA9ICFzdXJwcmlzZVwiIHRleHQ9XCJUYXAgbWUhXCIvPlxuICAgICAgICA8SW1hZ2Ugdi1pZj1cInN1cnByaXNlXCIgY2xhc3M9XCJtLTIwXCIgc3JjPVwifi9pbWFnZXMvTmF0aXZlU2NyaXB0LVZ1ZS5wbmdcIi8+XG4gICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbiAgYCxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIENvdW50ZXIsXG4gICAgfSxcbn0pXG4iXX0=