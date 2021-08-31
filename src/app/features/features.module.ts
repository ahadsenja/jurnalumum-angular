import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { FeaturesRoutingModule } from './features-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { JurnalComponent } from './jurnal/jurnal-list/jurnal.component';
import { JurnalCreateComponent } from './jurnal/jurnal-create/jurnal-create.component';

import { TransactionComponent } from './transaction/transaction-list/transaction.component';
import { TransactionCreateComponent } from './transaction/transaction-create/transaction-create.component';
import { TransactionUpdateComponent } from './transaction/transaction-update/transaction-update.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, RegisterComponent, JurnalComponent, TransactionComponent, JurnalCreateComponent, TransactionCreateComponent, TransactionUpdateComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    JurnalComponent,
    TransactionComponent
  ]
})
export class FeaturesModule { }
