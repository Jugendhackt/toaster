import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private http: HttpClient, private settings: SettingsService) { }
  tan: number = 50;

  toastNow(): Observable<Boolean> {
    return new Observable((subscriber) => {
      //`http://${this.settings.getToasterAddress()}/api/v1/toast/make`
      let maxTime = this.settings.getSetting('maxTime');
      let minTime = this.settings.getSetting('minTime');
      console.log(maxTime, minTime, this.tan);
      let time = Math.round(minTime + (this.tan/100)*(maxTime-minTime));

      this.http.get(`http://${this.settings.getToasterAddress()}/api/v1/toast/make?time=${time}`).subscribe((result: Boolean) => {
        console.log(result);
        subscriber.next(result);
      })
    })
  }

  ejectToast(): Observable<Boolean> {
    return new Observable((subscriber) => {
      this.http.get(`http://${this.settings.getToasterAddress()}/api/v1/toast/eject`).subscribe((result: Boolean) => {
        console.log(result);
        subscriber.next(result);
      })
    })
  }

  getToastState(): Observable<State> {
    return new Observable((subscriber) => {
      subscriber.next({ toastInside: true, timeLeft: 42, timePassed: 22 })
      this.http.get(`http://${this.settings.getToasterAddress()}/api/v1/toast/state`).subscribe((result: Object) => {
        console.log(result);
        subscriber.next({ toastInside: result['inside'], timeLeft: result['remainingTime'], timePassed: result['totalTime']});
      })
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
  timePassed: number;
}