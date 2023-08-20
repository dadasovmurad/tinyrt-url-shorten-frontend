import { Guid } from "guid-typescript";

export interface ShortenUrlBaseModel{
    id:Guid;
    destination:string;
    shortUrl: string;
}