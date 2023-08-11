import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './components/password/password.component';
import { UrlGenerateComponent } from './components/url-generate/url-generate.component';

const routes: Routes = [
  {
    component: PasswordComponent,
    path: 'password',
  },
  {
    path:'',component:UrlGenerateComponent
  },
  { path: '**', redirectTo:"/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
