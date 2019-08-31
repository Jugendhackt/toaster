import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }
  tan: number = 0;

  toastNow(): Observable<Object> {
    return new Observable((subscriber) => {
      subscriber.next({});
    })
  }

  ejectToast(): Observable<Boolean> {
    return new Observable((subscriber) => {
      subscriber.next(true);
    })
  }

  getToastState(): Observable<State> {
    return new Observable((subscriber) => {
      subscriber.next({ toastInside: true, timeLeft: 42 })
    })
  }

  setAlarm(alarm: Alarm): Observable<Object> {
    return new Observable((subscriber) => {
      subscriber.next({})
    })
  }

  getAlarm(): Observable<Object> {
    return new Observable((subscriber) => {
      subscriber.next({})
    })
  }

  setToastTan(tan: number): void {
    this.tan = tan;
  }

  getToastTan(): number {
    return this.tan;
  }
}

interface Alarm {
  time: Time;
  doAlarmTone: Boolean;
  doAutoToast: Boolean;
}

interface State {
  toastInside: Boolean;
  timeLeft: number;
}