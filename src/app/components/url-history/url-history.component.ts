import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ShortenUrlReponseModel } from 'src/app/models/shortenUrlResponseModel';

@Component({
  selector: 'app-url-history',
  templateUrl: './url-history.component.html',
  styleUrls: ['./url-history.component.css'],
})
export class UrlHistoryComponent implements OnInit {
  historyLinks: ShortenUrlReponseModel[];

  ngOnInit(): void {
    this.fillHistoryLinks();
  }
  fillHistoryLinks() {
    this.historyLinks = [
      {
        passwordProtected: true,
        id: Guid.parse('7CD0B5A6-6669-4648-C37A-08DBA16CABD7'),
        destination:
          'asdasdasdasdasdasdasdasdSADASASDsss',
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
}
