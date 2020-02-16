import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../tools/entities.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = 'https://api.bnext.io/partner_test/';

  constructor(private http: HttpClient) { }

  // GET: Obtener todas las fundaciones activas | Se Paginas de a 5
  getUserById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-WEB-KEY': 'Development'
    });

    return this.http.get<any>(`${this.url}user?id=${id}`, { headers });
  }

  postUser(id: number, user: User): Observable<any> {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-WEB-KEY': 'Development'
    });

    return this.http.post<any>(`${this.url}user/${id}`, body, { headers });
  }

}
