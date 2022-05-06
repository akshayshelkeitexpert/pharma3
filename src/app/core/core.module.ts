import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpHeaderInterceptorService } from './services/Interceptors/http-header.interceptor';


@NgModule({
  declarations: [
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptorService,
      multi: true
    }
  ],
})
export class CoreModule { }
