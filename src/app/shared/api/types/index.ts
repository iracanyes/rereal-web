import {HttpErrorResponse, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "@security/service";
import {Router} from "@angular/router";
import {ApiService} from "@api/service";

export * from './api.response';
export * from './token.interface';
export * from './credential.interface';

export interface IsEmpty {
  isEmpty: boolean;
}

export type AddTokenHeaderFn = (req: HttpRequest<any>, token: string) => HttpRequest<any>;

export type HttpInterceptorCommonHandlerFn = (error: HttpErrorResponse) => Observable<any>;

export type HttpInterceptorHandlerFn = (
  error: HttpErrorResponse,
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  tokenService: TokenService,
  router: Router,
  api: ApiService,
) => Observable<any>;
