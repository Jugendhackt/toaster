import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleTimeInputChange($event) {
    console.log($event);
  }

}
