import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.apiUrl);
  }
  getDetailUserById(userId: number): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.apiUrl}/${userId}`);
  }
}
