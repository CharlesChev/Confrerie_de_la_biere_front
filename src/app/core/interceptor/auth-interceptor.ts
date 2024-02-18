import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.method === 'DELETE' || req.method === 'PUT' || req.method === 'POST'){
            if (sessionStorage.getItem('auth') === 'true') {
                const authReq = req.clone({
                    headers:req.headers.set('Authorization','Basic Q29uZnJlcmU6TGFiaWVyZTc4Niw=')
                });
                return next.handle(authReq);
           }
        }
        return next.handle(req);       
    }
}