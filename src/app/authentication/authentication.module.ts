import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthenticationComponent } from './authentication/authentication.component';

export const ROUTES: Routes = [
    {
        path: '',
        component:AuthenticationComponent, 
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'register',
                component:RegisterComponent
            }
        ]
    }
];

@NgModule({
    declarations: [LoginComponent, RegisterComponent, AuthenticationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        
    ],
    bootstrap:[
        AuthenticationComponent
    ]
})

export class AuthenticationModule { }
