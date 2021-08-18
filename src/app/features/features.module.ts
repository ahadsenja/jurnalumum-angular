import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { JurnalComponent } from './jurnal/jurnal-list/jurnal.component';
import { TransactionComponent } from './transaction/transaction-list/transaction.component';


@NgModule({
  declarations: [DashboardComponent, LoginComponent, RegisterComponent, JurnalComponent, TransactionComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
