import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (req.method === 'DELETE' || req.method === 'PUT' || req.method === 'POST'){
            const authReq = req.clone({
                headers:req.headers.set('Authorization','Basic YWRtaW46cGFzc3dvcmQ=')
            });
            return next.handle(authReq);
        }
        return next.handle(req);       
    }
}