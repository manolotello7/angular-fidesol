import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMDComponent } from './form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormMDComponent', () => {
  let component: FormMDComponent;
  let fixture: ComponentFixture<FormMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMDComponent ],
      imports: [FormsModule, ReactiveFormsModule]
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
