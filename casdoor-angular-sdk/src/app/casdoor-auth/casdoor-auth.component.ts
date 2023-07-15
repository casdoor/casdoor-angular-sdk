import { Component } from '@angular/core';
import { CasdoorService } from 'casdoor-sdk';

@Component({
  selector: 'app-casdoor-auth',
  templateUrl: './casdoor-auth.component.html',
  styleUrls: ['./casdoor-auth.component.scss'],
})
export class CasdoorAuthComponent {
  public isAuthenticated: boolean = false;

  constructor(private casdoorService: CasdoorService) {
    this.checkAuthentication();
  }

  public checkAuthentication(): void {
    this.casdoorService
      .checkAuthentication()
      .then((response) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public login(): void {
    this.casdoorService.login();
  }

  public logout(): void {
    this.casdoorService.logout();
  }
}
