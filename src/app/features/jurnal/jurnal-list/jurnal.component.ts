import { Component, OnInit } from '@angular/core';

import { Jurnal } from 'src/app/shared/models/jurnal';
import { JurnalService } from '../../services/jurnal.service';

@Component({
  selector: 'app-jurnal',
  templateUrl: './jurnal.component.html',
  styleUrls: ['./jurnal.component.css']
})
export class JurnalComponent implements OnInit {

  jurnals: Jurnal[] = [];

  constructor(private jurnalService: JurnalService) { }

  ngOnInit(): void {
    this.onGetJurnals();
  }

  onGetJurnals() {
    this.jurnalService.getAll().subscribe(jurnals => {
      this.jurnals = jurnals;
      console.log(jurnals);
    })
  }

}
