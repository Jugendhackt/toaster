import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastNowComponent } from './toast-now.component';

describe('ToastNowComponent', () => {
  let component: ToastNowComponent;
  let fixture: ComponentFixture<ToastNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
