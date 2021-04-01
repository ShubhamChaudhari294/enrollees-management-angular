import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleeDetailComponent } from './components/enrollee-detail/enrollee-detail.component';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';

const routes: Routes = [
  { path: '', redirectTo: 'enrollee', pathMatch: 'full' },
  { path: 'enrollee', component: EnrolleeComponent },
  { path: 'enrollee-detail/:id', component: EnrolleeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
