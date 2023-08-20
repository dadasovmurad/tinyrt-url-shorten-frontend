import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShortenService } from '../../services/shorten.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-url-generate',
  templateUrl: './url-generate.component.html',
  styleUrls: ['./url-generate.component.css'],
})
export class UrlGenerateComponent implements OnInit {
  inputUrl: string = '';
  btnShortenContent: string = 'Shorten';
  customUrl: string = '';
  password: string = '';
  shortenUrlBtnVisibilty: boolean = false;
  showProgressBar: boolean = false;
  onCreateAction: boolean = true;

  readonly previewUrl: string = new URL(window.location.href).origin.concat(
    '/'
  );
  urlGenerateForm: any;
  @ViewChild('shortUrl') shortUrlElement!: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private shortService: ShortenService,
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
      this.inputUrl = '';
      this.btnShortenContent = 'Shorten';
    }
  }

  shortUrlClicked(): void {
    if (this.urlGenerateForm.valid) {
      if (this.isUrlValid(this.inputUrl)) {
        this.onCreateAction = !this.onCreateAction;
        let createModel = Object.assign({}, this.urlGenerateForm.value);
        this.showProgressBar = true;
        this.shortService
          .Create(createModel)
          .pipe(
            finalize(() => {
              this.showProgressBar = false;
              this.onCreateAction = !this.onCreateAction;
            })
          )
          .subscribe((response) => {
            if (response.success) {
              this.toastr.success(response.message);
              this.clearAdvancedSettingsValue();
              this.inputUrl = this.previewUrl.concat(response.data.shortUrl);
              console.log(response.data);
              this.shortUrlElement.nativeElement.value = this.inputUrl;
              this.shortUrlElement.nativeElement.focus();
              this.shortUrlElement.nativeElement.select();
              this.btnShortenContent = 'Copy';
              this.shortenUrlBtnVisibilty = true;
            }
          });
      } else {
        this.toastr.error('Invalid URL');
      }
    } else {
      this.toastr.error('Validation error !');
    }
  }
  clearAdvancedSettingsValue() {
    this.customUrl = '';
    this.password = '';
  }
  copyUrlClicked(): void {
    this.shortUrlElement.nativeElement.select();
    document.execCommand('copy');
    this.shortenUrlBtnVisibilty = false;
    this.toastr.clear();
    this.toastr.info('Copied to clipboard!');
  }
  disabledValidation(): boolean {
    return !(
      this.inputUrl.trim().length >= 3 &&
      (this.customUrl == '' || this.customUrl.trim().length >= 3)
    );
  }
  shortenOtherUrl() {
    this.clearAdvancedSettingsValue();
    this.inputUrl = '';
    this.shortenUrlBtnVisibilty = false;
    this.btnShortenContent = 'Shorten';
  }

  createUrlGenerateForm() {
    this.urlGenerateForm = this.formBuilder.group({
      destination: ['', [Validators.nullValidator, Validators.required]],
      shortUrl: ['', []],
      password: [''],
    });
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
