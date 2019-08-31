import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastTanComponent } from './toast-tan.component';

describe('ToastTanComponent', () => {
  let component: ToastTanComponent;
  let fixture: ComponentFixture<ToastTanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastTanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastTanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
