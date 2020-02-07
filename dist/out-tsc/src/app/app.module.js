import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PilgrimagePackageComponent } from './pilgrimage-package/pilgrimage-package.component';
import { ContactComponent } from './contact/contact.component';
const RouteT = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'PilgrimagePackage', component: PilgrimagePackageComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'pagenotfound', component: PagenotfoundComponent },
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            RegistrationComponent,
            HomeComponent,
            PagenotfoundComponent,
            PilgrimagePackageComponent,
            ContactComponent
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot(RouteT),
            FormsModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map