import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { JurnalCreateComponent } from './jurnal/jurnal-create/jurnal-create.component';
import { JurnalComponent } from './jurnal/jurnal-list/jurnal.component';
import { TransactionCreateComponent } from './transaction/transaction-create/transaction-create.component';
import { TransactionComponent } from './transaction/transaction-list/transaction.component';
import { TransactionUpdateComponent } from './transaction/transaction-update/transaction-update.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  
  { path: 'jurnal', component: JurnalComponent },
  { path: 'jurnal/create', component: JurnalCreateComponent },

  { path: 'transaction', component: TransactionComponent },
  { path: 'transaction/create', component: TransactionCreateComponent },
  { path: 'transaction/edit/:id', component: TransactionUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
