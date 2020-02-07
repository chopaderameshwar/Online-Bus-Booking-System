import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ContactComponent = class ContactComponent {
    constructor() {
        this.model = {};
        this.e = [];
    }
    ngOnInit() {
        this.e = JSON.parse(localStorage.getItem("contact"));
    }
    addEmployee() {
        console.log(this.model);
        let emp = JSON.parse(localStorage.getItem("contact"));
        if (emp == null) {
            emp = [];
        }
        emp.push(this.model);
        localStorage.setItem("contact", JSON.stringify(emp));
        this.e = JSON.parse(localStorage.getItem("contact"));
        this.model = {};
    }
};
ContactComponent = tslib_1.__decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map