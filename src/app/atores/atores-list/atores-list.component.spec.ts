import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoresListComponent } from './atores-list.component';

describe('AtoresListComponent', () => {
  let component: AtoresListComponent;
  let fixture: ComponentFixture<AtoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
