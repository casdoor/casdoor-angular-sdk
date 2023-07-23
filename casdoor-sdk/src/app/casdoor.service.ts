import { Injectable } from '@angular/core';
import Sdk from 'casdoor-js-sdk';
import {Account} from "casdoor-js-sdk/lib/cjs/sdk";
const config = {
  serverUrl: "https://door.casdoor.com",
  clientId: "014ae4bd048734ca2dea",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
@Injectable({
  providedIn: 'root'
})


export class CasdoorService {
  private sdk: Sdk;

  get getSignupUrl() {
    return this.getSignupUrl();
  }
  get getSigninUrl() {
    return this.getSigninUrl()
  }
  getUserProfileUrl(userName: string, account: Account) {
    return this.sdk.getUserProfileUrl(userName, account);
  }
  getMyProfileUrl(account: Account, returnUrl?: String) {
    return this.sdk.getMyProfileUrl(account);
  }
  signin(url: string) {
    return this.sdk.signin(url);
  }
  goToLink(link: string) {
    window.location.href = link;
  }

  constructor() {
    this.sdk = new Sdk(config);

  }

}
