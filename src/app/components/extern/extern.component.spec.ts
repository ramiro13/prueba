import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternComponent } from './extern.component';

describe('ExternComponent', () => {
  let component: ExternComponent;
  let fixture: ComponentFixture<ExternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
