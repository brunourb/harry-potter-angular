import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioDetailComponent } from './estudio-detail.component';

describe('EstudioDetailComponent', () => {
  let component: EstudioDetailComponent;
  let fixture: ComponentFixture<EstudioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
