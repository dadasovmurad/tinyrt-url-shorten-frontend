import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlGenerateComponent } from './components/url-generate/url-generate.component';
import { HeaderComponent } from './components/header/header.component';
import { UrlHistoryComponent } from './components/url-history/url-history.component';
import { FooterComponent } from './components/footer/footer.component';
import { PasswordComponent } from './components/password/password.component';
import { CommonModule } from '@angular/common'; // CommonModule eklenmeli
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";
import { ValidUrlPipe } from './pipes/valid-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UrlGenerateComponent,
    HeaderComponent,
    UrlHistoryComponent,
    FooterComponent,
    PasswordComponent,
    ValidUrlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    CommonModule, // CommonModule eklenmeli
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
