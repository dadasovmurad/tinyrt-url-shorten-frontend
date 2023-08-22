import { Component, Inject, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ShortenUrlReponseModel } from 'src/app/models/shortenUrlResponseModel';
import { Clipboard } from '@angular/cdk/clipboard';
import { QrGenerateComponent } from '../qr-generate/qr-generate.component';
import { MatDialog } from '@angular/material/dialog';
import { Toast, ToastrService } from 'ngx-toastr';
import { ShortenService } from 'src/app/services/shorten.service';

@Component({
  selector: 'app-url-history',
  templateUrl: './url-history.component.html',
  styleUrls: ['./url-history.component.css'],
})
export class UrlHistoryComponent implements OnInit {
  historyLinks: ShortenUrlReponseModel[];
  constructor(
    private clipboard: Clipboard,
    private dialogRef: MatDialog,
    private toastr: ToastrService,
    private shortenService: ShortenService
  ) {}
  ngOnInit(): void {    
    this.fillHistoryLinks();
  }
  fillHistoryLinks() {
    this.historyLinks = [
      {
        passwordProtected: true,
        id: Guid.parse('7CD0B5A6-6669-4648-C37A-08DBA16CABD7'),
        destination: 'asdasdasdasdasdasdasdasdSADASASDsss',
        shortUrl: 'MYURL',
      },
      {
        passwordProtected: false,
        id: Guid.parse('0B7F3C57-DCF7-40AE-40EB-08DBA106899F'),
        destination:
          'https://www.youtube.com/watch?v=mX2L_lVSkOY&ab_channel=MoodMelodies',
        shortUrl: 'aZ4LW',
      },
      {
        passwordProtected: true,
        id: Guid.parse('057B8DB7-C17F-463C-D5E1-08DBA17DA2E3'),
        destination:
          'https://www.google.com/search?q=global+exception+angular&oq=global+exception+angular&aqs=chrome..69i57j0i512l6j0i22i30l3.3335j0j7&sourceid=chrome&ie=UTF-8',
        shortUrl: 'fmcSG',
      },
    ];
  }
  openDestinationLink(destination: string) {
    window.open(destination);
  }
  copyShortUrl(shortUrl: string) {
    this.clipboard.copy(shortUrl);
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
      }
    });
  }
  addLocalStroge(shortenUrl:ShortenUrlReponseModel){
    alert(JSON.stringify(shortenUrl));
    localStorage.setItem('history',JSON.stringify(shortenUrl));
  }
}
