import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShortenService } from '../../services/shorten.service';
import { ProtectedUrlModel } from 'src/app/models/protectedUrlModel';
import { ToastrService } from 'ngx-toastr';
import { ExceptionHandlerService } from 'src/app/services/exception-handler.service';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: [
    './password.component.css',
    '../url-generate/url-generate.component.css',
  ],
})
export class PasswordComponent implements OnInit {
  inputUrl: string = '';
  shortUrl: string = '';
  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private shortenService: ShortenService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.shortUrl = params['shortUrl'];
      console.log(this.shortUrl);
    });
  }
  confirmPassword() {
    this.shortenService
      .VerifyPassword(this.shortUrl, this.inputUrl)
      .subscribe((res) => {
        if (res.success) {
          this.shortenService
            .GetUrlDestination(this.shortUrl)
            .subscribe((res) => {
              if (res.success) {
                window.location.href = res.data;
              }
            });
        }
      });
  }
}
