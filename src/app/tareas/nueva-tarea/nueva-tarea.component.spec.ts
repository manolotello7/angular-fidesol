import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTareaComponent } from './nueva-tarea.component';
import { FormsModule } from '@angular/forms';

describe('NuevaTareaComponent', () => {
  let component: NuevaTareaComponent;
  let fixture: ComponentFixture<NuevaTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaTareaComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
