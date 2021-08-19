import { Location } from '@angular/common';
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

  transactionCreateFG = new FormGroup({})

  transactions: Transaction[] = [];

  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.transactionCreateFG = this.formBuilder.group({
      date: [''],
      description: [''],
      debit: [''],
      credit: [''],
    })
  }

  onCreateTransaction() {
    let formData: any = new FormData();

    formData.append('date', this.transactionCreateFG.get('date')?.value);
    formData.append('description', this.transactionCreateFG.get('description')?.value);
    formData.append('debit', this.transactionCreateFG.get('debit')?.value);
    formData.append('credit', this.transactionCreateFG.get('credit')?.value);

    this.transactionService.create(formData).subscribe(res => {
      console.log(res);
      this.isSubmitted = true;
    })

    this.location.replaceState('/transaction');
  }

  onCancel() {
    this.router.navigate(['/transaction']);
  }

}
