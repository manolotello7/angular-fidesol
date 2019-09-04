import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTDComponent } from './form-td.component';
import { FormsModule } from '@angular/forms';

describe('FormTDComponent', () => {
  let component: FormTDComponent;
  let fixture: ComponentFixture<FormTDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTDComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
