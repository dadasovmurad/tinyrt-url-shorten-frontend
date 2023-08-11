import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule'u burada import edin
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // NgbModule eklendi

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlGenerateComponent } from './components/url-generate/url-generate.component';
import { HeaderComponent } from './components/header/header.component';
import { UrlGenerateAdvancedSettingsComponent } from './components/url-generate-advanced-settings/url-generate-advanced-settings.component';
import { UrlHistoryComponent } from './components/url-history/url-history.component';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordComponent } from './components/password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlGenerateComponent,
    HeaderComponent,
    UrlGenerateAdvancedSettingsComponent,
    UrlHistoryComponent,
    FooterComponent,
    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
