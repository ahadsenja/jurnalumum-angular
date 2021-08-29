import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';

import { LoginComponent } from './features/pages/login/login.component';
import { RegisterComponent } from './features/pages/register/register.component';

import { DashboardComponent } from './features/dashboard/dashboard.component';

import { JurnalComponent } from './features/jurnal/jurnal-list/jurnal.component';
import { JurnalCreateComponent } from './features/jurnal/jurnal-create/jurnal-create.component';

import { TransactionComponent } from './features/transaction/transaction-list/transaction.component';
import { TransactionCreateComponent } from './features/transaction/transaction-create/transaction-create.component';
import { TransactionUpdateComponent } from './features/transaction/transaction-update/transaction-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'jurnal', component: JurnalComponent, canActivate: [AuthGuard] },
  { path: 'jurnal/create', component: JurnalCreateComponent, canActivate: [AuthGuard] },

  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'transaction/create', component: TransactionCreateComponent, canActivate: [AuthGuard] },
  { path: 'transaction/edit/:id', component: TransactionUpdateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
