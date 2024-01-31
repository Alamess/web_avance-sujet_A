import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  ApiUrl="http://localhost:5001/api/reclamation"
  constructor(private httpClient:HttpClient) {
   }
   Checkreclamation(nom:any,prenom:any, dateNaissance:any,civilite:any,cin:any,rib:any,sujet:any,texte:any):Observable<any>{
    const headers = new HttpHeaders({
        'Content-Type' : 'application/json'
    });
    return this.httpClient.post(this.ApiUrl,{nom,prenom,dateNaissance,civilite,cin,rib,sujet,texte},{headers}).pipe(
      catchError((error)=>{
        console.error(error);
        return throwError(error);
      })
    )
   }
}
