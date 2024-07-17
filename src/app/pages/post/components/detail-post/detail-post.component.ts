import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDTO } from '../../dto/post.dto';
import { PostService } from '../../post.service';
import { tap } from 'rxjs';
import { UserService } from '../../../user/user.service';
import { UserDTO } from '../../../user/user.dto';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})
export class DetailPostComponent implements OnInit{

  postData: PostDTO | undefined;
  userData: UserDTO | undefined;

  public postId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
  ){}

  ngOnInit(
  ) {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('postId') ? Number(params.get('postId')) : 0;  // Assuming 'postId' is the name of the route parameter
      this.getPostByPostId(this.postId);
    });

  }

  getPostByPostId(postId: number): void {
    this.postService.getDetailPostById(postId)
    .pipe(
      tap(data => this.postData = data)
    )
    .pipe(
      tap(data => {
        this.userService.getDetailUserById(data.userId)
        .pipe(tap(userData => {
          this.userData = userData;
        }))
        .subscribe();
      })
    )
    .subscribe()


    
  }
  
}
