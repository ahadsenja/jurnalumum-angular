import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from 'src/app/core/constants/api';
import { Jurnal } from 'src/app/shared/models/jurnal';

@Injectable({
  providedIn: 'root'
})
export class JurnalService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Jurnal[]>(Api.JURNAL_URL);
  }
}
