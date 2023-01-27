import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowFooterComponent } from './flow-footer.component';

describe('FlowFooterComponent', () => {
  let component: FlowFooterComponent;
  let fixture: ComponentFixture<FlowFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
