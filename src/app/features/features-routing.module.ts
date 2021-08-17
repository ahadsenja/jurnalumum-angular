import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { JurnalComponent } from './jurnal/jurnal.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jurnal', component: JurnalComponent },
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
