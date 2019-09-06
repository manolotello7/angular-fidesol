import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockLibrosComponent } from './mock-libros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('MockLibrosComponent', () => {
  let component: MockLibrosComponent;
  let fixture: ComponentFixture<MockLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockLibrosComponent ],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
