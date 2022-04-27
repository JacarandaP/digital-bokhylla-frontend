import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Challenge} from "./challenge";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

 private challengesUrl = 'https://digitalbokhylla.herokuapp.com/challenge/getactives?userId=61f3edf33c22f300e64e5bb2'
  private challengeUrl = 'https://digitalbokhylla.herokuapp.com/challenge'
  httpOptions = {
   headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

 constructor(
   private http: HttpClient) {
 }

 getActiveChallenges(): Observable<Challenge[]>{
   return this.http.get<Challenge[]>(this.challengesUrl)
     .pipe(
       catchError(this.handleError<Challenge[]>('getActiveChallenges', []))
     );
 }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getChallenge(challengeId: string): Observable<Challenge> {
   const url = `${this.challengeUrl}/getChallenge?challengeId=${challengeId}`;
   return this.http.get<Challenge>(url).pipe(
     catchError(this.handleError<Challenge>(`getChallenge challengeId=${challengeId}`))
   );
  }
}
