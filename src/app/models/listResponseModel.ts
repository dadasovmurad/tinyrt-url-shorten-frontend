import { ResponseModel } from "./createResponseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}