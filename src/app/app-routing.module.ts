import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './components/password/password.component';
import { UrlGenerateComponent } from './components/url-generate/url-generate.component';
import { passwordValidationGuard } from './guards/password-validation.guard';
import { redirectDestinationGuard } from './guards/redirect-destination.guard';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    component: UrlGenerateComponent,
    canActivate:[redirectDestinationGuard],
    path: ':shortUrl',
  },
  {
    component: PasswordComponent,
    path: 'password/:shortUrl',
    canActivate: [passwordValidationGuard],
  },
  {
    path: '',
    component: UrlGenerateComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
