import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Imovie } from 'src/interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // login(user : any):Observable<any>{
  //   return this.http.get()
  // }

  getMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movie/top_rated`, {
      headers: { Authorization: environment.accessToken },
    });
  }

  searchMovie(criteria: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/search/movie`, {
      headers: { Authorization: environment.accessToken },
      params: { query: criteria },
    });
  }
}
