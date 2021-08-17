import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

import { LoginComponent } from './features/pages/login/login.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { JurnalComponent } from './features/jurnal/jurnal.component';
import { TransactionComponent } from './features/transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'jurnal', component: JurnalComponent, canActivate: [AuthGuard] },
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
