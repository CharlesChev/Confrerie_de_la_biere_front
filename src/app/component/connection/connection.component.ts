import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cred } from 'src/app/core/interfaces/cred.interface';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  constructor(private http: HttpClient, private router: Router) { }

  credentials: Cred = { username: '', password: '' };
  authenticated = false;
  authError = false;

  login(credentials: Cred) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', { headers: headers }).subscribe((response: any) => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    });
  }
}
