import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDetailComponent } from './filmes-detail.component';

describe('FilmesDetailComponent', () => {
  let component: FilmesDetailComponent;
  let fixture: ComponentFixture<FilmesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
