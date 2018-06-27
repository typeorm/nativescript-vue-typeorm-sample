"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const nativescript_vue_1 = tslib_1.__importDefault(require("nativescript-vue"));
class Counter extends nativescript_vue_1.default {
}
exports.default = nativescript_vue_1.default.extend({
    data() {
        return {
            count: 42,
        };
    },
    computed: {
        message() {
            return this.count > 0
                ? `Tap tap tap! Only ${this.count} left!`
                : `Whoa! Slow down, we have hit the limit...`;
        },
    },
    template: `
    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="count" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      
      <Label class="p-20" :text="message"/>
    </StackLayout>
  `,
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0ZBQWtDO0FBRWxDLGFBQWMsU0FBUSwwQkFBRztDQUV4QjtBQUNELGtCQUFlLDBCQUFHLENBQUMsTUFBTSxDQUFVO0lBQy9CLElBQUk7UUFDQSxPQUFPO1lBQ0gsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFDO0lBQ04sQ0FBQztJQUNELFFBQVEsRUFBRTtRQUNOLE9BQU87WUFDSCxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLHFCQUFxQixJQUFJLENBQUMsS0FBSyxRQUFRO2dCQUN6QyxDQUFDLENBQUMsMkNBQTJDLENBQUM7UUFDdEQsQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFOzs7Ozs7Ozs7O0dBVVg7SUFDQyxPQUFPLEVBQUU7UUFDTCxTQUFTO1lBQ0wsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELFNBQVM7WUFDTCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBWdWV7XG4gICAgY291bnQ6IG51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZDxDb3VudGVyPih7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvdW50OiA0MixcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudCA+IDBcbiAgICAgICAgICAgICAgICA/IGBUYXAgdGFwIHRhcCEgT25seSAke3RoaXMuY291bnR9IGxlZnQhYFxuICAgICAgICAgICAgICAgIDogYFdob2EhIFNsb3cgZG93biwgd2UgaGF2ZSBoaXQgdGhlIGxpbWl0Li4uYDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPFN0YWNrTGF5b3V0PlxuICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxCdXR0b24gQHRhcD1cImRlY3JlbWVudFwiIHRleHQ9XCItXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmVcIi8+XG4gICAgICAgIDxMYWJlbCA6dGV4dD1cImNvdW50XCIgYWxpZ25TZWxmPVwiYmFzZWxpbmVcIiBjbGFzcz1cImgyXCIvPlxuICAgICAgICA8QnV0dG9uIEB0YXA9XCJpbmNyZW1lbnRcIiB0ZXh0PVwiK1wiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lXCIvPlxuICAgICAgPC9GbGV4Ym94TGF5b3V0PlxuICAgICAgXG4gICAgICA8TGFiZWwgY2xhc3M9XCJwLTIwXCIgOnRleHQ9XCJtZXNzYWdlXCIvPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbmNyZW1lbnQoKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY3JlbWVudCgpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnQgLT0gMTtcbiAgICAgICAgfSxcbiAgICB9LFxufSkiXX0=