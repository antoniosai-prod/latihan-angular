import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { filter, map, tap } from 'rxjs';
import { PostDTO } from '../../dto/post.dto';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.css'
})
export class ShowPostComponent implements OnInit {

  postData: PostDTO[] = [];

  constructor(
    private postService: PostService
  ) {

  }

  ngOnInit(): void {
    // Observable
    this.postService.getAllPosts()
      .pipe(
        tap(data => {
          this.postData = data;
        })
      )
      .subscribe()

      // Promise
      // this.postService.getAllPosts()
      // .then( res => {

      // })
      // .catch()
  }
  
  getAllPosts(): void {
    this.postService.getAllPosts()
  }

}
