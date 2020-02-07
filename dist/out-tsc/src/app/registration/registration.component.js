import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RegistrationComponent = class RegistrationComponent {
    constructor(r) {
        this.r = r;
        this.model = {};
        this.e = [];
        this.temp = [];
    }
    ngOnInit() {
        this.e = JSON.parse(localStorage.getItem("hh"));
    }
    addEmployee() {
        this.temp = JSON.parse(localStorage.getItem('hh'));
        let k = 0;
        for (let i = 0; i < this.temp.length; i++) {
            if (this.temp[i].Email == this.model.Email) {
                k++;
                break;
            }
        }
        if (k == 1) {
            alert('already registered');
        }
        else {
            let emp = JSON.parse(localStorage.getItem("hh"));
            if (emp == null) {
                emp = [];
            }
            emp.push(this.model);
            localStorage.setItem("hh", JSON.stringify(emp));
            this.e = JSON.parse(localStorage.getItem("hh"));
            this.model = {};
            // this.r.navigate(['/Login']);
        }
    }
};
tslib_1.__decorate([
    Input()
], RegistrationComponent.prototype, "Email", void 0);
RegistrationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css']
    })
], RegistrationComponent);
export { RegistrationComponent };
//   model:any={};
//   e:any[]=[];
//     constructor() { }
//     ngOnInit() {
//       this.e=JSON.parse(localStorage.getItem("gg"));
//     }
//     addEmployee()
//     {
//      console.log(this.model);
//      let emp=JSON.parse(localStorage.getItem("gg"));
//      if(emp==null)
//      {
//        emp=[];
//      }
//      emp.push(this.model);
//       localStorage.setItem("gg",JSON.stringify(emp));
//       this.e=JSON.parse(localStorage.getItem("gg"));
//           this.model={};
//     }
// }
//# sourceMappingURL=registration.component.js.map