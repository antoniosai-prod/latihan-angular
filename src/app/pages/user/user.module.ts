import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';



@NgModule({
  declarations: [
    ShowUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
