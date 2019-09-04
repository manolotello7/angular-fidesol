import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMDComponent } from './form-md.component';

describe('FormMDComponent', () => {
  let component: FormMDComponent;
  let fixture: ComponentFixture<FormMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
