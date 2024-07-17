import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    title: 'Halaman Post',
    loadChildren: () =>
      import('./pages/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'users',
    title: 'Halaman user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
