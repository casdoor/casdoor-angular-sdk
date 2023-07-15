import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CasdoorService } from 'casdoor-sdk';

import { AppComponent } from './app.component';
import { CasdoorAuthComponent } from './casdoor-auth.component';

@NgModule({
  declarations: [AppComponent, CasdoorAuthComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CasdoorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
