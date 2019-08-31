import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'card-toast-now',
  templateUrl: './toast-now.component.html',
  styleUrls: ['./toast-now.component.scss']
})
export class ToastNowComponent implements OnInit {

  isToasting: Boolean = false;
  toastingProgress: number = 30;
  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
  }

  handleToastNowClick() {
    if(this.isToasting) {
      this.toasterService.ejectToast().subscribe((success) => {
        if(success) {
          this.isToasting = false;
        }
      })
    }else {
      this.toasterService.toastNow().subscribe((success) => {
        if(success) {
          this.isToasting = true;
          this.requestProgress(true);
        }
      })
    }
  }

  requestProgress(doRecursion) {
    this.toasterService.getToastState().subscribe(state => {
      console.log(state);
      if(state.timeLeft && state.timePassed) {
        this.toastingProgress = Math.round(state.timePassed / (state.timeLeft+state.timePassed)*100);
        if(doRecursion && this.isToasting) {
          setTimeout(() => {this.requestProgress(true)}, 5000);
        }
      }
    })
  }

}
