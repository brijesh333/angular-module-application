import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'setting', loadChildren: './setting/setting.module#SettingModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
