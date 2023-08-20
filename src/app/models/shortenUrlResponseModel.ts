import { ShortenUrlBaseModel } from "./shortenUrlBaseModel";

export interface ShortenUrlReponseModel extends ShortenUrlBaseModel{
    passwordProtected: boolean;
}