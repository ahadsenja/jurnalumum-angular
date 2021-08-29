import { Component, OnInit } from '@angular/core';

import { 
  faTrashAlt, 
  faPenAlt, 
  faSearch, 
  faPlus 
} from '@fortawesome/free-solid-svg-icons';

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
  tr: Transaction[] = [];

  balance = 0;

  constructor(private tsService: TransactionService) { }

  ngOnInit(): void {
    this.onGetTransactions();
  }

  onGetTransactions() {
    this.tsService.getAll().subscribe(transactions => {
      this.transactions = transactions;

      for (let i=0; i < transactions.length; i++) {
        let debit = transactions[i].debit;
        let credit = transactions[i].credit;     

        this.balance = (this.balance + (debit - credit));
        this.transactions[i].balance = this.balance;
      }
    })
  }

}
