import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SettingService} from '../../settings/setting.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private configUrl: SettingService) { }

  login(credentials): Observable<any> {
    return this.http.post(this.configUrl.AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this.configUrl.AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      name: user.name,
      surname: user.surname
    }, httpOptions);
  }

  changePassowrd(passwordChanger): Observable<any> {
    return this.http.post(this.configUrl.AUTH_API + 'changePassword', {
      password: passwordChanger.password
    }, httpOptions);
  }
}
