import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-url-generate',
  templateUrl: './url-generate.component.html',
  styleUrls: ['./url-generate.component.css'],
})
export class UrlGenerateComponent implements OnInit {
  inputUrl: string = '';
  btnShortenContent: string = 'Shorten';
  customUrl: string = '';
  readonly previewUrl: string = 'tinyrt.io/';
  urlGenerateForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createUrlGenerateForm();
  }
  shortenClick() {
    if (this.btnShortenContent == 'Shorten') {
      this.shortUrl();
    } else {
      this.copyUrl();
    }
  }
  shortUrl(): void {
    if (this.urlGenerateForm.valid) {
      console.log(this.urlGenerateForm.value);
      this.btnShortenContent = 'Copy';
    }
  }
  copyUrl(): void {
    this.btnShortenContent = 'Shorten';
  }
  disabledValidation(): boolean {
    return !(
      this.inputUrl.length >= 3 &&
      (this.customUrl == '' || this.customUrl.trim().length >= 3)
    );
  }

  createUrlGenerateForm() {
    this.urlGenerateForm = this.formBuilder.group({
      shortUrl: ['', Validators.minLength(3)],
      customUrl: [''],
    });
  }
}
