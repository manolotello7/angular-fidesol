import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiosLibrosComponent } from './propios-libros.component';

describe('PropiosLibrosComponent', () => {
  let component: PropiosLibrosComponent;
  let fixture: ComponentFixture<PropiosLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiosLibrosComponent ]
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
