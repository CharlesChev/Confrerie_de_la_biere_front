import { EventEmitter, Injectable } from '@angular/core';
import { Cred } from '../core/interfaces/cred.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  public isConnectedEmitter:EventEmitter<boolean> = new EventEmitter<boolean>();

  login(credentials:Cred) {
     sessionStorage.setItem('auth', 'true');
     this.isConnectedEmitter.emit(true);
   }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['home']);
    this.isConnectedEmitter.emit(false);
  }
 
}
