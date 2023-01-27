import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintsDetailsComponent } from './paints-details.component';

describe('PaintsDetailsComponent', () => {
  let component: PaintsDetailsComponent;
  let fixture: ComponentFixture<PaintsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
