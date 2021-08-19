import { Component, OnInit } from '@angular/core';

import { faTrashAlt, faPenAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Transaction } from 'src/app/shared/models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  pen = faPenAlt;
  trash = faTrashAlt;
  search = faSearch;
  plus = faPlus;

  transactions: Transaction[] = [];

  constructor(private tsService: TransactionService) { }

  ngOnInit(): void {
    this.onGetTransactions();
  }

  onGetTransactions() {
    this.tsService.getAll().subscribe(transactions => {
      this.transactions = transactions;
      console.log(transactions);
    })
  }

}
