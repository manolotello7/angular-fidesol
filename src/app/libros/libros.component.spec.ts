import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosComponent } from './libros.component';
import { GoogleLibrosComponent } from './google-libros/google-libros.component';
import { PropiosLibrosComponent } from './propios-libros/propios-libros.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LibrosComponent', () => {
  let component: LibrosComponent;
  let fixture: ComponentFixture<LibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LibrosComponent,
        GoogleLibrosComponent,
        MockLibrosComponent,
        PropiosLibrosComponent
       ],
       imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
