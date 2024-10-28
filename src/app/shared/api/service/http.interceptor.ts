/**
 * Here we intercept all request to API
 * If it's a public route, it let the request pass
 * if it's a private route, it retrieves the token from TokenService
 * and attach it to the request's headers "authorization".
 * If the token expired, it requests a refresh token
 * Else if the token is empty, it redirects to login
 */
import {HttpErrorResponse, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {catchError, EMPTY, Observable, switchMap, tap} from "rxjs";
import { publicRoutes } from "@api/enum/api-public.node";
import {inject} from "@angular/core";
import {TokenService} from "@security/service";
import {Router} from "@angular/router";
import {AppNode} from "@shared/core/enum/app.node";
import {
  AddTokenHeaderFn,
  ApiResponse,
  HttpInterceptorCommonHandlerFn,
  HttpInterceptorHandlerFn,
  Token
} from "@api/types";
import {ApiService} from "@api/service/api.service";
import {ApiNode} from "@api/enum/api-node.enum";


export const HttpInterceptor = (req: HttpRequest<any>, next: any) => {
  const currentRoute = new URL(req.url).pathname.slice(1);
  console.log(`publicRoutes: ${publicRoutes}`);
  console.log(`req.url: ${currentRoute}`);

  // Here we
  if(publicRoutes.includes(currentRoute)){
    return next(req)
      .pipe(
        tap(() => console.log('Route public intercepté!'))
      );
  }

  //Here we are in restricted area
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);

  // If token is not empty, attach the 'Authorization' header on request
  // pass the request to next handler
  if(!tokenService.token().isEmpty){
    const api: ApiService = inject(ApiService);

    return next(setTokenInHeader(req, tokenService.token().token))
      .pipe(
        catchError((err: HttpErrorResponse) => handleError(
          err,
          req,
          next,
          tokenService,
          router,
          api
        )),
        tap(() => console.log(`Route privée interceptée! ${req.url}`))
      )
  }

  // If it's private route and no token exists,
  // Redirect to login page
  return redirectToLogin(router, currentRoute);
};

const setTokenInHeader: AddTokenHeaderFn = (req: HttpRequest<any>, token: string): HttpRequest<any> => {
  return req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
}

const redirectToLogin: (router: Router,currentRoute: string) => Observable<any> = (
  router: Router,
  currentRoute: string
) => {
  router.navigate([AppNode.SIGN_IN], { queryParams: {previous: currentRoute }}).then();
  return EMPTY;
}

const handleCommonError: HttpInterceptorCommonHandlerFn = (
  err: HttpErrorResponse,
): Observable<any> => {
  throw(err);
}

/**
 * Handle common error 401 unauthorized access
 * @param err
 * @param req
 * @param next
 * @param tokenService
 * @param router
 * @param api
 */
const handleError: HttpInterceptorHandlerFn = (
  err: HttpErrorResponse,
  req: HttpRequest<any> ,
  next: HttpHandlerFn,
  tokenService: TokenService,
  router: Router,
  api: ApiService,
): Observable<any> => {
  // Here, token send with the API request has expired
  // We try to refresh it
  if( err.status === 401 || err.status === 403 ){

    // Here the token is expired
    // Check if refreshToken exists, and refresh the token.
    // If not we redirect to public route
    if(!tokenService.token().isEmpty){
      return api.post(ApiNode.REFRESH, { refresh: tokenService.token().refreshToken })
        .pipe(
          switchMap((result: ApiResponse) => {
            if(result.result){
              // Finally, if we get new token, we retry
              return next(setTokenInHeader(req, result.data.token))
                .pipe(
                  catchError((err: HttpErrorResponse) => handleCommonError(err)),
                  tap(() => tokenService.setToken({...result.data.token as Token, isEmpty: false }))
                );
            }

            // Redirect because refreshToken is expired too
            return redirectToLogin(router, new URL(req.url).pathname.slice(1));
          })
        );
    }

    // Redirect because the refreshToken doesn't exist
    return redirectToLogin(router, new URL(req.url).pathname.slice(1));
  }

  // Here we can show something to client
  // Maybe a toaster or ...
  return handleCommonError(err);
}
