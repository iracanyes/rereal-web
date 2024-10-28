import {inject, Injectable} from '@angular/core';
import {Environment} from "@environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ApiResponse} from "@api/types/api.response";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string = Environment.API_URL + Environment.API_BASE_URI;
  private readonly http: HttpClient = inject(HttpClient);
  private readonly paramIsMissingErrorCode: number = Environment.PARAM_IS_MISSING

  constructor() { }

  /**
   * Handle the observable returned by HttpClient requests :
   * - map successful request to successHandler
   * - catch errors handle them with errorHandler
   * @param obs
   * @private
   */
  private handle(obs: Observable<any>){
    return obs.pipe(
      map((response: object) => this.successHandler(response)),
      catchError((error: HttpErrorResponse) => of(this.errorHandler(error)))
    );
  }

  /**
   * Customize the response return by ApiService on success request
   * @param response
   * @private
   */
  private successHandler(response: object){
    console.log('ApiService.successHandler - response', response);

    return { ...response as ApiResponse, paramError: false };
  }

  /**
   * Customize the reponse returned by ApiService on failed request
   * @param httpError
   * @private
   */
  private errorHandler(httpError: HttpErrorResponse){
    console.error('Error while handling API request', httpError);

    return {
      ...httpError.error,
      paramError: (httpError.status === this.paramIsMissingErrorCode)
    };
  }

  get(partUrl: string): Observable<any>{
    return this.handle(this.http.get<ApiResponse>(`${this.baseUrl}${partUrl}`))
  }

  post(partUrl: string, payload: any): Observable<any>{
    return this.handle(this.http.post<ApiResponse>(`${this.baseUrl}${partUrl}`, payload));
  }

  put(partUrl: string, payload: any): Observable<any>{
    return this.handle(this.http.put<ApiResponse>(`${this.baseUrl}${partUrl}`, payload));
  }

  delete(partUrl: string): Observable<any>{
    return this.handle(this.http.delete<ApiResponse>(`${this.baseUrl}${partUrl}`));
  }
}
