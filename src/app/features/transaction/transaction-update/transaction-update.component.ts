import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.css']
})
export class TransactionUpdateComponent implements OnInit {

  formValueGroup = new FormGroup({});
  isSubmitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onUpdateTransaction() {
    
  }

  onCancel() {
    this.formValueGroup.reset();
    this.router.navigate(['/transaction'])
  }

}
