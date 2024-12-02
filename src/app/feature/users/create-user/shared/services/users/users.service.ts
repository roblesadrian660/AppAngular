import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { environment } from '../../../../../../../environments/environment';
import { PaginatedResponse } from './../../../../../../shared/Interfaces/reqres.interface';
import { ResponseUserInsert } from '../../../../../../shared/Interfaces/ResponseUserInsert.interface';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})

export class UsersService {

  private baseUrl: string = environment.API;
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  public async getUsers(): Promise<PaginatedResponse>{
    const headers = new HttpHeaders().set('Authorization', this.token);
    console.log(`${ this.baseUrl }/users`);
    return this.http.get<PaginatedResponse>(`${ this.baseUrl }/users`,{headers}).toPromise();
  }

  public async createUser(user: { name: string; job: string }): Promise<ResponseUserInsert> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    return this.http.post<ResponseUserInsert>(`${this.baseUrl}/users`, user, { headers }).toPromise();
  }

  public async deleteUserForIndex(index: number):Promise<any> {
    const headers = new HttpHeaders().set('Authorization', this.token);
    return this.http.delete(`${this.baseUrl}/users/${index}`, { headers }).toPromise();
  }
}
