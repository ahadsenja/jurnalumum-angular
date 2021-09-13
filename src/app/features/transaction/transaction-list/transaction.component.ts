import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  faTrashAlt,
  faPenAlt,
  faSearch,
  faPlus,
  faSort,
  faPrint
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
  sort = faSort;
  print = faPrint

  transactions: Transaction[] = [];

  searchText = '';
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;
  balance = 0;

  constructor(
    private tsService: TransactionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetTransactions();
  }

  onGetTransactions() {
    this.tsService.getAll().subscribe(transactions => {
      this.transactions = transactions;

      for (let i = 0; i < transactions.length; i++) {
        let debit = transactions[i].debit;
        let credit = transactions[i].credit;

        this.balance = (this.balance + (debit - credit));
        this.transactions[i].balance = this.balance;
      }
    })
  }

  onDeleteTransaction(transaction: Transaction) {
    this.tsService.delete(transaction).subscribe(res => {
      this.transactions = this.transactions.filter(id => id !== transaction);
      alert(`Data With ID '${transaction.id}' Successfully Deleted!`);
      window.location.reload();
    })
  }

  onSelectedTransaction(id: number) {
    this.router.navigate(['/transaction/edit', id]);
  }

  onSorting(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}