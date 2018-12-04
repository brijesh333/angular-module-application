import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'module-application';
  router=[
    {
      text:'Authentication',
      path:'authentication'
    },
    {
      text:'Setting',
      path:'setting'
    }
  ]
}
