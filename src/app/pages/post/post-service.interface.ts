import { Observable } from "rxjs";
import { PostDTO } from "./dto/post.dto";

export interface PostServiceInterface {
  getAllPosts(): Observable<PostDTO[]>;
  getDetailPostById(postId: number): Observable<PostDTO>;
}