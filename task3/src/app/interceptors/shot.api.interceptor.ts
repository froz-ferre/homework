import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ShotService } from '../services/shot.service';

@Injectable()
export class ShotApiInterceptor implements HttpInterceptor {

    constructor(private shotService: ShotService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.urlWithParams === this.shotService.apiUrlFull) {
            return next.handle(req);
        } else {
            const clone = req.clone({
                setParams: {
                    'page': `${this.shotService.apiPage++}`,
                    'per_page': '20'
                } // req.params.set('page', '1')
            });
            console.log(req.urlWithParams);
            console.log(clone.params);
            return next.handle(clone);
        }
    }
}
