import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLibrosComponent } from './google-libros.component';

describe('GoogleLibrosComponent', () => {
  let component: GoogleLibrosComponent;
  let fixture: ComponentFixture<GoogleLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
