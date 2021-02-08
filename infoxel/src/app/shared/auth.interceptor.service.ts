import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const newRequest = req.clone({headers: req.headers.append('Content-Type', 'application/json')});
        return next.handle(newRequest);
    }
}
