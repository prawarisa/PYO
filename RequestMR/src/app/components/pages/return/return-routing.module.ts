import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./return-admin/return-admin-routing.module').then(
        (m) => m.ReturnAdminRoutingModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./return-user/return-user-routing.module').then(
        (m) => m.ReturnUserRoutingModule
      ),
  },
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // Default ไปหน้า user
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnRoutingModule {

 }
