import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurnalCreateComponent } from './jurnal-create.component';

describe('JurnalCreateComponent', () => {
  let component: JurnalCreateComponent;
  let fixture: ComponentFixture<JurnalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JurnalCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JurnalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
