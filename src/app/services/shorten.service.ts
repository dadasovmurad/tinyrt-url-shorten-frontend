import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateModel } from 'src/app/models/createModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { ShortenUrlReponseModel } from 'src/app/models/shortenUrlResponseModel';
import { Guid } from 'guid-typescript';
import { ProtectedUrlModel } from 'src/app/models/protectedUrlModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  private readonly apiUrl = 'https://localhost:7057/api/link/';
  constructor(private httpClient: HttpClient) {}

  Create(createModel: CreateModel) {
    return this.httpClient.post<SingleResponseModel<ShortenUrlReponseModel>>(
      this.apiUrl + 'create',
      createModel
    );
  }
  CheckProtected(shortUrl: string) {
    const params = { shortUrl: shortUrl };

    return this.httpClient.get<SingleResponseModel<boolean>>(
      this.apiUrl + 'check-protected',
      { params }
    );
  }
  GetUrlDestination(shortUrl: string) {
    const params = { shortUrl: shortUrl };

    return this.httpClient.get<SingleResponseModel<string>>(
      this.apiUrl + 'destination',
      { params }
    );
  }
  VerifyPassword(shortUrl: string, password: string) {
    const params = {
      shortUrl: shortUrl,
      password: password,
    };
    return this.httpClient.get<ResponseModel>(this.apiUrl + 'verify-password', {
      params,
    });
  }
  Delete(id: Guid) {
    const params = {
      id: id.toString(),
    };
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete', {
      params,
    });
  }
}
