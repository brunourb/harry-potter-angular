import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoresDetailComponent } from './atores-detail.component';

describe('AtoresDetailComponent', () => {
  let component: AtoresDetailComponent;
  let fixture: ComponentFixture<AtoresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoresDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
