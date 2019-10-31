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
  users: object[]|null = null;

  constructor(private service: ServerService) { 

  }

  ngOnInit() {
    const user: Object = {
      Date: "Wed, 23 Oct 2019 00:12:37 GMT",
      Email: "arenas.venicio2@gmail.com",
      Id: 1,
      Name: "Venicio",
      Password: "kabhdiu3e3a",
      SquadId: 1,
      UserName: "veloko"
    };

    this.service.createUser(user).toPromise()
    .then(() => {
      return this.service.getUsers().toPromise();
    })
    .then((data) => {
      this.users = [...data.value];
    });

  }

}
