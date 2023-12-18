import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Biere } from '../core/interfaces/biere.interface';
import { Observable, catchError, of } from 'rxjs';

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

  private errorBiere:Biere = {
    id:99999,
    nom: "biere vide :(",
    pay: "Il y a un petit problème!",
    photo: "assets/beer_arti3.png",
    type:"",
    brasserie:"Brasserie de l'erreur"
  }

  getOneRandomBiere(): Observable<Biere>{
    let options = {headers:this.getHeaders};
    let randomNumber: string = Math.floor(Math.random() * 20).toString();
    return this.http.get<Biere>(environment.baseUrl + "biere/" + randomNumber, options).pipe(
      catchError(this.handleError<Biere>(this.errorBiere))
    );
  }

  getOneBiere(id: number): Observable <Biere> {
    let options = {headers:this.getHeaders};
    return this.http.get<Biere>(environment.baseUrl + "biere/" + id.toString(), options).pipe(
      catchError(this.handleError<Biere>(this.errorBiere))
    );
  }

  private handleError<T>(result?:T){
    return (error:any):Observable <T> => {
      console.log(error);
      return of( result as T); 
    };
  }


}





