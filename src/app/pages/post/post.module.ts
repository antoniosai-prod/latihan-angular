import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { PostService } from "./post.service"
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/user.service';



@NgModule({
  declarations: [
    ShowPostComponent,
    DetailPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    UserService
  ]
})
export class PostModule { }
