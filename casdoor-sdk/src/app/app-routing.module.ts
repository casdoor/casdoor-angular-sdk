import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import callbackPage from '../views/callbackPage.vue';
import homePage from '../views/homePage.vue';
import authBox from '../views/authBox.vue';
const routes = [
  {path: '/home', component: homePage,},
  {path: '/callback', component: callbackPage,},
  {path: '/login', component: authBox,}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
