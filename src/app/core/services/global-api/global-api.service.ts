import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ServerUrl } from './../../constants/serverUrl.constants';
import { ApiErrorResponse, ApiSuccessResponse } from '../../models/api-response-models';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {

  constructor(
    private http: HttpClient,
  ) { }


  post(url: string, data: any, isLoader: boolean = true, skipInterceptor: boolean = false): Observable<ApiSuccessResponse | any> {
    return this.http.post(url, data, { headers: skipInterceptor ? this.skipInterceptor() : null }).pipe(
      map((res: ApiSuccessResponse) => {
        return this.extractData(res, url, data, false);
      }),
      catchError((err: ApiErrorResponse) => {
        return throwError(err);
      })
    );
  }

  uploadFile(url: string, data: any, isLoader: boolean = true, skipInterceptor: boolean = true): Observable<ApiSuccessResponse | any> {
    let headers: HttpHeaders = new HttpHeaders({ InterceptorSkipHeader: 'true' });
    return this.http.post(url, data,
      { headers: headers }).pipe(
        map((res: ApiSuccessResponse) => {
          return this.extractData(res, url, data, false);
        }),
        catchError((err: ApiErrorResponse) => {
          return throwError(err);
        })
      );
  }

  put(url: string, data: any, isLoader: boolean = true, skipInterceptor: boolean = false): Observable<ApiSuccessResponse | any> {
    return this.http.put(url, data, { headers: skipInterceptor ? this.skipInterceptor() : null }).pipe(
      map((res: ApiSuccessResponse) => {
        return this.extractData(res, url, data, false);
      }),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  get(url: string, isLoader: boolean = true, skipInterceptor: boolean = false,): Observable<ApiSuccessResponse | any> {
    let data: any = null;
    return this.http.get(url, { headers: skipInterceptor ? this.skipInterceptor() : null }).pipe(
      map((res: ApiSuccessResponse) => {
        return this.extractData(res, url, data, false);
      }),
      catchError((err: ApiErrorResponse) => {
        return throwError(err);
      })
    );
  }

  downloadDocument(url: string, isLoader: boolean = false): Observable<any> {
    return this.http.get<Blob>(url, { observe: 'response', responseType: 'blob' as 'json' })
  }


  delete(url: string, isLoader: boolean = true, skipInterceptor: boolean = false): Observable<ApiSuccessResponse | any> {
    let data: any = null;
    return this.http.delete(url, { headers: skipInterceptor ? this.skipInterceptor() : null }).pipe(
      map((res: ApiSuccessResponse) => {
        return this.extractData(res, url, data, false);
      }),
      catchError((err: ApiErrorResponse) => {
        return throwError(err);
      })
    );
  }

  skipInterceptor() {
    return new HttpHeaders({ InterceptorSkipHeader: 'true' });

  }


  extractData(res: ApiSuccessResponse, url: any, data: any, isLoader: boolean): ApiSuccessResponse {
    return res;
  }

}
