import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule'u burada import edin

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlGenerateComponent } from './components/url-generate/url-generate.component';
import { HeaderComponent } from './components/header/header.component';
import { UrlGenerateAdvancedSettingsComponent } from './components/url-generate-advanced-settings/url-generate-advanced-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlGenerateComponent,
    HeaderComponent,
    UrlGenerateAdvancedSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
