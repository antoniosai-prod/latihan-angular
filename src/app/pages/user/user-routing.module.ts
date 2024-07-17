import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowUserComponent } from "./components/show-user/show-user.component";
import { DetailUserComponent } from "./components/detail-user/detail-user.component";

const routes: Routes = [
  { path: "", component: ShowUserComponent },
  { path: ":userId", component: DetailUserComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}