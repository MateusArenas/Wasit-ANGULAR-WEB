import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  inputs: ['id: name-id'],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string|null = null;
  users: Array<object>|null = [];

  constructor(private service: ServerService) { 

  }

  ngOnInit() {
    // this.service.getUsers().subscribe((data) => {
    //   console.log('value: ', data);
    //   this.users = data['value'];
    // });
    fetch('http://localhost:5002/Users')
    .then((data) => {
      console.log(data);
    });
  }

}
