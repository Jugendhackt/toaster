import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color1_MIN = [223,198,180];//'dfc6b4';
  color2_MIN = [238,217,168];//'eed9a8';
  color1_MID = [176,113,68];//'b07144';
  color2_MID = [240,215,152];//'f0d798';
  color1_MAX = [73,45,26];//'492d1a';
  color2_MAX = [45,36,15];//'2d240f'

  constructor() { }

  getColor1(percent: number): string {
    let r: number = 0;
    let g: number = 0;
    let b: number = 0;
    if(percent < 0.5) {
      percent = percent * 2;
      r = this.color1_MIN[0] + percent * (this.color1_MID[0] - this.color1_MIN[0]);
      g = this.color1_MIN[1] + percent * (this.color1_MID[1] - this.color1_MIN[1]);
      b = this.color1_MIN[2] + percent * (this.color1_MID[2] - this.color1_MIN[2]);
    } else if(percent > 0.5 ) {
      percent = (percent - 0.5)*2;
      r = this.color1_MID[0] + percent * (this.color1_MAX[0] - this.color1_MID[0]);
      g = this.color1_MID[1] + percent * (this.color1_MAX[1] - this.color1_MID[1]);
      b = this.color1_MID[2] + percent * (this.color1_MAX[2] - this.color1_MID[2]);
    } else {
      r = this.color1_MID[0];
      g = this.color1_MID[1];
      b = this.color1_MID[2];
    }
    return `rgb(${r}, ${g}, ${b})`
  }

  getColor2(percent: number): string {
    let r: number = 0;
    let g: number = 0;
    let b: number = 0;
    if(percent < 0.5) {
      percent = percent * 2;
      r = this.color2_MIN[0] + percent * (this.color2_MID[0] - this.color2_MIN[0]);
      g = this.color2_MIN[1] + percent * (this.color2_MID[1] - this.color2_MIN[1]);
      b = this.color2_MIN[2] + percent * (this.color2_MID[2] - this.color2_MIN[2]);
    } else if(percent > 0.5 ) {
      percent = (percent - 0.5)*2;
      r = this.color2_MID[0] + percent * (this.color2_MAX[0] - this.color2_MID[0]);
      g = this.color2_MID[1] + percent * (this.color2_MAX[1] - this.color2_MID[1]);
      b = this.color2_MID[2] + percent * (this.color2_MAX[2] - this.color2_MID[2]);
    } else {
      r = this.color2_MID[0];
      g = this.color2_MID[1];
      b = this.color2_MID[2];
    }
    return `rgb(${r}, ${g}, ${b})`
  }
}
