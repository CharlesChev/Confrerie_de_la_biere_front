import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private authService:AuthService) {
    this.authService.isConnectedEmitter.subscribe((isTrueOrNot:boolean)=>this.connected = isTrueOrNot);
  }

  connected = false;

  logout(){
    this.authService.logout();
  }
}
