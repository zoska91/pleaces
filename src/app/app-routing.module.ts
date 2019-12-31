import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

import { HomeComponent } from './pages/home/home.component';
import { NotesComponent } from './pages/notes/notes.component';
import { PlansComponent } from './pages/plans/plans.component';
import { HistoryComponent } from './pages/history/history.component';
import { RoadsComponent } from './pages/roads/roads.component';
import { NotLoginComponent } from './shared-components/not-login/not-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'plans', component: PlansComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'roads', component: RoadsComponent, canActivate: [AuthGuard] },
  { path: 'not-login', component: NotLoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
