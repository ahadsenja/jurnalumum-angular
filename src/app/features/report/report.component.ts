import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import * as html2pdf from 'html2pdf.js';

import { Transaction } from 'src/app/shared/models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
  date_now = moment(new Date(), this.DATE_TIME_FORMAT);

  transactions: Transaction[] = [];

  balance = 0;

  constructor(
    private tsService: TransactionService
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

  createPdf() {
    let element = document.getElementById('transaction-report');

    let opt = {
      margin: 10,
      filename: 'report-transaction.pdf',
      html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    html2pdf().from(element).set(opt).save();
  }

}
