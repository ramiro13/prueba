import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHomeComponent } from './slider-home.component';

describe('SliderHomeComponent', () => {
  let component: SliderHomeComponent;
  let fixture: ComponentFixture<SliderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
