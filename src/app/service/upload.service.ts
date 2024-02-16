import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  upload(file:File){
    const formData: FormData = new FormData();
    
   
    
      formData.append('file', file);
  
      return this.http.post(environment.baseUrl + "upload", formData);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/files`);
  }
}
