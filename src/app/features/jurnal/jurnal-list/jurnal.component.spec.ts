import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurnalComponent } from './jurnal.component';

describe('JurnalComponent', () => {
  let component: JurnalComponent;
  let fixture: ComponentFixture<JurnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurnalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
