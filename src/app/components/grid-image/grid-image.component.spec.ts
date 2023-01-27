import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImageComponent } from './grid-image.component';

describe('GridImageComponent', () => {
  let component: GridImageComponent;
  let fixture: ComponentFixture<GridImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
