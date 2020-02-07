import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    // constructor(private  p1:ActivatedRoute,private r:Router) { }
    // ngOnInit() {
    // }
    //       changeG()
    //       {
    //         this.p.setlogin(true);
    //       }
    // data:any={};
    // temp:any[]=[];
    //       ongo():void
    //       {
    //         let c=0;
    //         this.temp=JSON.parse(localStorage.getItem('info'));
    //         for(let i=0;i<this.temp.length;i++)
    //         {
    //           if(this.temp[i].Email==this.data.name)
    //           {
    //              c++;
    //              break;
    //           }
    //         }
    //         if(c==1)
    //         {
    //           alert('successs');
    //           this.r.navigate(['/Service']);
    //         }
    //         else{
    //           alert('enter valid');
    //         }
    //       }
    constructor(p1, r) {
        this.p1 = p1;
        this.r = r;
        this.data = {};
        this.temp = [];
    }
    ngOnInit() {
    }
    changeG() {
        this.p.setlogin(true);
    }
    ongo() {
        let c = 0;
        this.temp = JSON.parse(localStorage.getItem('info'));
        for (let i = 0; i < this.temp.length; i++) {
            if (this.temp[i].Email == this.data.name) {
                c++;
                break;
            }
        }
        if (c == 1) {
            alert('successs');
            this.r.navigate(['/Service']);
        }
        else {
            alert('enter valid');
        }
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map