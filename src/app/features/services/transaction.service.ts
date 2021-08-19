import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from 'src/app/core/constants/api';

import { Transaction } from 'src/app/shared/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Transaction[]>(Api.TRANSACTION_URL);
  }
}
