import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowPostComponent } from "./components/show-post/show-post.component";
import { DetailPostComponent } from "./components/detail-post/detail-post.component";

const routes: Routes = [
  { path: "", component: ShowPostComponent },
  { path: ":postId", component: DetailPostComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {}