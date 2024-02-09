import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cred } from 'src/app/core/interfaces/cred.interface';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  credentials: Cred = { username: '', password: '' };
  authError = false;

  login(){
    if ((btoa(this.credentials.username +':'+this.credentials.password) === environment.pass))
    this.authService.login(this.credentials);
    else {
      this.authError = true;
     }
  }
}


