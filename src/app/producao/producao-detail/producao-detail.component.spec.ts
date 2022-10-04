import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducaoDetailComponent } from './producao-detail.component';

describe('ProducaoDetailComponent', () => {
  let component: ProducaoDetailComponent;
  let fixture: ComponentFixture<ProducaoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducaoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
