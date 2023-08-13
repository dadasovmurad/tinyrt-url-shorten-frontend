import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.shortUrl = params['shortUrl'];
      console.log(this.shortUrl);
    });
  }
}
