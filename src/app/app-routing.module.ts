import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';
import { ErrorComponent } from './pages/error/error.component';
import { NoUserComponent } from './pages/no-user/no-user.component';
import { ThanksComponent } from './pages/thanks/thanks.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'no-user', component: NoUserComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'gracias', component: ThanksComponent },
  { path: ':id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
