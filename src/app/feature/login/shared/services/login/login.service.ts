import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../../environments/environment';
import { LoginResponse } from '../../../../../shared/Interfaces/responseLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private baseUrl: string = environment.API;

  constructor(private http: HttpClient) { }

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public async login(username: string, password: string): Promise<LoginResponse> {
    const credentials = { username: username, email: username, password: password };
    return await this.http.post<LoginResponse>(`${this.baseUrl}/login`, credentials).toPromise();
  }
}
