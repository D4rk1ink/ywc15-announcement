import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { InterviewComponent } from './containers/interview/interview.component'
import { UserComponent } from './containers/user/user.component'

const routes: Routes = [
  {
    path: 'interview', component: InterviewComponent, 
  },
  {
    path: 'ct/:id', component: UserComponent, 
  },
  {
    path: 'ds/:id', component: UserComponent, 
  },
  {
    path: 'mk/:id', component: UserComponent, 
  },
  {
    path: 'pg/:id', component: UserComponent, 
  },
  {
    path: '**', redirectTo: 'interview'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
