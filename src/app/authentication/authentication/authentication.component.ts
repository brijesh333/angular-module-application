import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  router=[
    {
      text:'LogIn',
      path:'login'
    },
    {
      text:'Register',
      path:'register'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
