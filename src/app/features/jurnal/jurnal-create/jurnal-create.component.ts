import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Jurnal } from 'src/app/shared/models/jurnal';
import { JurnalService } from '../../services/jurnal.service';

@Component({
  selector: 'app-jurnal-create',
  templateUrl: './jurnal-create.component.html',
  styleUrls: ['./jurnal-create.component.css']
})
export class JurnalCreateComponent implements OnInit {

  jurnalCreateFG = new FormGroup({});

  isSubmitted = false;

  jurnals: Jurnal[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private jurnalService: JurnalService
  ) { }

  ngOnInit(): void {
    this.jurnalCreateFG = this.formBuilder.group({
      name: [''],
      description: [''],
      userId: ['']
    })
  }

  onCreateJurnal() {
    let formData: any = new FormData();

    formData.append('name', this.jurnalCreateFG.get('name')?.value);
    formData.append('description', this.jurnalCreateFG.get('description')?.value);
    formData.append('userId', this.jurnalCreateFG.get('userId')?.value);

    this.jurnalService.create(formData).subscribe(res => {
      console.log(res);
      this.isSubmitted = true;
    })
    this.location.replaceState('/jurnal');
  }

  onCancel() {
    this.router.navigate(['/jurnal']);
  }

}
