import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) {

  }

  getUsers(){
    return this.http.get('http://localhost:5002/Users', {responseType: 'json'});
  }

  createUser(user){
    return this.http.post('http://localhost:5002/Users', user, {responseType: 'json'});
  }
}
