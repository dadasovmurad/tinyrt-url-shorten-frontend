import { Injectable } from '@angular/core';
import { ShortenUrlReponseModel } from '../models/shortenUrlResponseModel';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private _historyLinks: ShortenUrlReponseModel[] = this.getLocalStorage();
  get HistoryLinks(): ShortenUrlReponseModel[] {
    return this._historyLinks;
  }
  addLocalStorage(shortenUrl: ShortenUrlReponseModel) {
    this._historyLinks.unshift(shortenUrl);
    localStorage.setItem('history', JSON.stringify(this._historyLinks));
  }
  removeLocalStorage(id: Guid) {
    this._historyLinks = this._historyLinks.filter((x) => x.id != id);
    localStorage.setItem('history', JSON.stringify(this._historyLinks));
  }
  getLocalStorage(): ShortenUrlReponseModel[] {
    var localStorageLinks = localStorage.getItem('history')?.toString();
    if (localStorageLinks) {
      return JSON.parse(localStorageLinks);
    }
    return [];
  }
}
