import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Biere } from '../core/interfaces/biere.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiereService {

  constructor(private http: HttpClient) { }

  private postHeaders = new HttpHeaders({
    'Content-type':'application/json',
    'Accept':'application/json'
  });

  private getHeaders = new HttpHeaders({
    'Accept':'application/json',
  });

  getOneRandomBiere(): Observable<Biere> {
    let options = {headers:this.getHeaders};
    let randomNumber: string = Math.floor(Math.random() * 20).toString();
    return this.http.get<Biere>(environment.baseUrl + "biere/" + randomNumber, options);
  }

  getOneBiere(id: number): Observable < Biere > {
    let options = {headers:this.getHeaders};
    let randomNumber: string = Math.floor(Math.random() * 20).toString();
    return this.http.get<Biere>(environment.baseUrl + "biere/" + id.toString(), options);
  }
}





