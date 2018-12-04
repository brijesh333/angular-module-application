import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';

import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

export const ROUTER: Routes = [
    {
        path: '', 
        component: SettingComponent,
        children:[
            {
                path:'notification',
                component: NotificationComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            }
        ]
    }
]

@NgModule({
    declarations: [SettingComponent, ProfileComponent, NotificationComponent],
    imports: [
        RouterModule.forChild(ROUTER),
        CommonModule
    ]
})
export class SettingModule { }
