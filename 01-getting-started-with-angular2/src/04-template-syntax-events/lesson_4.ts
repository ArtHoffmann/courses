
import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


@Component({
    selector: 'app',
    template: `

            <input value="Hello World !" #input>{{input.value}}

            <button (click)="onClick()">Click Me</button>

        `
})
export class App {

    onClick() {
        alert("Hello !");

        debugger;
    }


}



bootstrap(App);
