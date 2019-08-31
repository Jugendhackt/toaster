import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'card-toast-tan',
  templateUrl: './toast-tan.component.html',
  styleUrls: ['./toast-tan.component.scss']
})
export class ToastTanComponent implements OnInit {

  tan = 50
  color1 = '';
  color2 = '';
  background = '';
  constructor(private colorService: ColorService) { }

  ngOnInit() {
  }

  handleTanSliderChange($event): void {
    this.tan = $event.target.value;
    this.color1 = this.colorService.getColor1(this.tan/100);
    this.color2 = this.colorService.getColor2(this.tan/100);
    this.background = `linear-gradient(45deg, ${this.color1}, ${this.color2})`
    console.log(this.background);
  }
}
