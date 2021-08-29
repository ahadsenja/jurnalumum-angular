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

  create(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(Api.TRANSACTION_URL, transaction);
  }

  update(id: number, transaction: Transaction): Observable<Object> {
    return this.http.put(`${Api.TRANSACTION_URL}/${id}`, transaction);
  }

  delete(transaction: Transaction): Observable<Transaction> {
    return this.http.delete<Transaction>(`${Api.TRANSACTION_URL}/${transaction.id}`);
  }

  getById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${Api.TRANSACTION_URL}/${id}`);
  }
}
