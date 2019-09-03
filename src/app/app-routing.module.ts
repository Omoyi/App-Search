import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilizersPortraitComponent } from 'src/app/utilizers-portrait/utilizers-portrait.component';
import { TheUserComponent } from 'src/app/the-user/the-user.component';
import { ViewComponent } from 'src/app/view/view.component';


const routes: Routes = [
  { path: '', component: ViewComponent},
  { path: 'user/repositories?', component: UtilizersPortraitComponent},
  { path: 'userprofile?', component: TheUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
