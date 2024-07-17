import { Injectable } from '@angular/core';

import { PostServiceInterface } from "./post-service.interface"
import { Observable, tap } from 'rxjs';
import { PostDTO } from './dto/post.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService implements PostServiceInterface {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Observable<PostDTO[]> {
    return this.http.get<PostDTO[]>(this.apiUrl);
  }
  getDetailPostById(postId: number): Observable<PostDTO> {
    return this.http.get<PostDTO>(`${this.apiUrl}/${postId}`);
  }
}
