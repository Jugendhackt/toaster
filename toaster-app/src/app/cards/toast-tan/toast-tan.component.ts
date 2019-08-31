import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-toast-tan',
  templateUrl: './toast-tan.component.html',
  styleUrls: ['./toast-tan.component.scss']
})
export class ToastTanComponent implements OnInit {

  tan = 50
  constructor() { }

  ngOnInit() {
  }

  handleTanSliderChange($event): void {
    this.tan = $event.target.value;
  }
}
