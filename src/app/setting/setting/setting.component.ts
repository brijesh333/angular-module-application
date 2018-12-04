import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    router=[
        {
          text:'Profile',
          path:'profile'
        },
        {
          text:'Notification',
          path:'notification'
        }
      ]
    constructor() { }

    ngOnInit() {
    }

}
