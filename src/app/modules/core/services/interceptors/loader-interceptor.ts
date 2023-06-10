import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private spinner : NgxSpinnerService) { }

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show();

    this.totalRequests++;

    return next.handle(req)
    .pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) this.spinner.hide();
      }),
    )

  }
}
