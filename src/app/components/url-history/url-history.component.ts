import { Component, Inject, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ShortenUrlReponseModel } from 'src/app/models/shortenUrlResponseModel';
import { Clipboard } from '@angular/cdk/clipboard';
import { QrGenerateComponent } from '../qr-generate/qr-generate.component';
import { MatDialog } from '@angular/material/dialog';
import { Toast, ToastrService } from 'ngx-toastr';
import { ShortenService } from 'src/app/services/shorten.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-url-history',
  templateUrl: './url-history.component.html',
  styleUrls: ['./url-history.component.css'],
})
export class UrlHistoryComponent implements OnInit {
  constructor(
    private clipboard: Clipboard,
    private dialogRef: MatDialog,
    private toastr: ToastrService,
    private shortenService: ShortenService,
    private historyService: HistoryService
  ) {}
  historyLinks:ShortenUrlReponseModel[] = this.historyService.HistoryLinks;
  ngOnInit(): void {
  }

  openDestinationLink(destination: string) {
    window.open(destination);
  }
  copyShortUrl(shortUrl: string) {
    this.clipboard.copy(window.location + shortUrl);
    this.toastr.info('Copied to clipboard!')
  }
  openQrCode(shortUrl: string) {
    this.dialogRef.open(QrGenerateComponent, {
      data: document.location + shortUrl,
      exitAnimationDuration: '400ms',
      enterAnimationDuration: '300ms',
    });
  }
  removeLink(id: Guid) {
    this.shortenService.Delete(id).subscribe((res) => {
      if (res.success) {
        this.toastr.success('Link successfully deleted', 'Success');
        this.historyService.removeLocalStorage(id);
        this.historyLinks = this.historyService.HistoryLinks;
      }
    });
  }
}
