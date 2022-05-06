import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { ApplicationConstants } from '../../constants/application.constants';
import { AuthService } from '../auth/auth.service';
import { ApiErrorResponse, ApiSuccessResponse } from '../../models/api-response-models';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data/shared-data.service';
@Injectable({
  providedIn: 'root'
})
export class HttpHeaderInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private auth: AuthService,
    private sharedData: SharedDataService) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('InterceptorSkipHeader')) {
      req = req.clone({ headers: req.headers.set('Content-Type', ApplicationConstants.CONTENT_TYPE) });
      req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', ApplicationConstants.ACCESS_CONTROL_ORIGIN) });
      req = req.clone({ headers: req.headers.set('Access-Control-Allow-Methods', ApplicationConstants.ACCEPT_METHODS) });
      req = req.clone({ headers: req.headers.set('requestType', ApplicationConstants.REQUEST_TYPE) });
    }

    return next.handle(req).pipe(
      filter(eve => eve instanceof HttpResponse),
      tap((eve: HttpResponse<any>) => {
        if ('responseMessage' in eve.body) {
          if (eve.body.responseMessage.status === 417 && eve.body.responseMessage.message === 'MULTIPLE_SESSION_FOUND') {
            this.router.navigateByUrl('/multiplesession');
          } else if (eve.body.responseMessage.status === 417 && eve.body.responseMessage.message === 'TECHNICAL_ERROR') {
            this.router.navigateByUrl('/technical-err');
          }
        }
      }, error => {
        if (!req.headers.has('InterceptorSkipHeader')) {
          this.handleError(error);
        }
        return throwError(error);
      })
    );
  }

  handleError(error: ApiErrorResponse): void {
    let errorMessage = '';
  }

}
