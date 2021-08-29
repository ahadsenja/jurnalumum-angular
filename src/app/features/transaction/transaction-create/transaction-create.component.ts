import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Transaction } from 'src/app/shared/models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  formValueGroup = new FormGroup({})
  isSubmitted = false;

  transactions: Transaction[] = [];
  transactionObj : Transaction = new Transaction();
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.formValueGroup = this.formBuilder.group({
      date: [''],
      description: [''],
      debit: [0],
      credit: [0],
    });
  }

  onCreateTransaction() {
    this.transactionObj.date = this.formValueGroup.value.date;
    this.transactionObj.description = this.formValueGroup.value.description;
    this.transactionObj.debit = this.formValueGroup.value.debit;
    this.transactionObj.credit = this.formValueGroup.value.credit;

    this.transactionService.create(this.transactionObj).subscribe(res => {
      console.log(res);
      this.isSubmitted = true;
    })
    this.formValueGroup.reset();
    this.router.navigate(['/transaction']);
  }

  onCancel() {
    this.formValueGroup.reset();
    this.router.navigate(['/transaction']);
  }

}
