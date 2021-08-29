import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Transaction } from 'src/app/shared/models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.css']
})
export class TransactionUpdateComponent implements OnInit {

  formGroupValue = new FormGroup({});
  isSubmitted = false;

  tsObj: Transaction = new Transaction();

  id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tsService: TransactionService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupValue = this.formBuilder.group({
      date: [''],
      description: [''],
      debit: [0],
      credit: [0]
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tsService.getById(this.id).subscribe(data => {
      this.tsObj = data
      this.formGroupValue.patchValue({
        date: data.date,
        description: data.description,
        debit: data.debit,
        credit: data.credit
      })
    })
  }

  onUpdateTransaction() {
    this.tsObj.date = this.formGroupValue.value.date;
    this.tsObj.description = this.formGroupValue.value.description;
    this.tsObj.debit = this.formGroupValue.value.debit;
    this.tsObj.credit = this.formGroupValue.value.credit;

    this.tsService.update(this.tsObj.id, this.tsObj).subscribe(data => {
      this.isSubmitted = true;
      this.router.navigate(['/transaction']);
    }, error => console.log(error))
  }

  onCancel() {
    this.formGroupValue.reset();
    this.router.navigate(['/transaction'])
  }

}
