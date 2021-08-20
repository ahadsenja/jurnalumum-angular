import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Jurnal[]>(Api.JURNAL_URL, {headers: headers});
  }
}
