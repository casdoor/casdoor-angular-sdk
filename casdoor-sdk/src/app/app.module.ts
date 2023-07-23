import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CasdoorService } from './casdoor.service';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
const config = {
  serverUrl: "https://door.casdoor.com",
  clientId: "014ae4bd048734ca2dea",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: "/callback",
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule],
  providers: [CasdoorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

