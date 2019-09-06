import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiosLibrosComponent } from './propios-libros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PropiosLibrosComponent', () => {
  let component: PropiosLibrosComponent;
  let fixture: ComponentFixture<PropiosLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiosLibrosComponent ],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiosLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
