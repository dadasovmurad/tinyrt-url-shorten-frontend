import { ShortenUrlBaseModel } from "./shortenUrlBaseModel";

export interface CreateModel extends ShortenUrlBaseModel {
    password : string;
}