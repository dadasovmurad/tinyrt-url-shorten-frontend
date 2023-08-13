import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  urlGenerateForm: any;
  @ViewChild('shortUrl') shortUrlElement!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUrlGenerateForm();
  }
  shortenClick() {
    if (this.btnShortenContent == 'Shorten') {
      this.shortUrlClicked();
    } else {
      this.copyUrlClicked();
    }
  }

  shortUrlClicked(): void {
    if (this.urlGenerateForm.valid) {
      if (this.isUrlValid(this.inputUrl)) {
        console.log(this.urlGenerateForm.value);
        this.shortUrlElement.nativeElement.select();
        this.btnShortenContent = 'Copy';
      } else {
        this.toastr.error('Invalid URL');
      }
    } else {
      this.toastr.warning('Incorrect validation !');
    }
  }
  copyUrlClicked(): void {
    this.shortUrlElement.nativeElement.select();
    document.execCommand('copy');
    this.inputUrl = '';
    this.btnShortenContent = 'Shorten';
  }
  disabledValidation(): boolean {
    return !(
      this.inputUrl.trim().length >= 3 &&
      (this.customUrl == '' || this.customUrl.trim().length >= 3)
    );
  }

  createUrlGenerateForm() {
    this.urlGenerateForm = this.formBuilder.group({
      shortUrl: [
        '',
        [
          Validators.nullValidator,
          Validators.required,
          Validators.minLength(3),
          this.noWhitespaceValidator,
        ],
      ],
      customUrl: [''],
      password: [''],
    });
  }
  noWhitespaceValidator(control: FormControl) {
    return (control.value || '').trim().length >= 3
      ? null
      : { whitespace: true };
  }
  isUrlValid(url: string): boolean {
    try {
      const urlObject = new URL(url);
      return !!urlObject.searchParams; // !! işareti, değeri boolean'a dönüştürür
    } catch (error) {
      return false;
    }
  }
}
