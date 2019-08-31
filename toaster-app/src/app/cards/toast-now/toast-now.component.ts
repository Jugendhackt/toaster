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
  timeLeft: number = 0;
  minutesLeft: number = 0;
  timePassed: number = 0;
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

  stateSubscription;
  requestProgress(doRecursion) {
    if(this.stateSubscription){ 
      console.log(this.stateSubscription);
      this.stateSubscription.unsubscribe();
    }
    this.stateSubscription = this.toasterService.getToastState().subscribe(state => {
      console.log(state);
      if(state.timeLeft && state.timePassed) {
        this.timeLeft = state.timeLeft;
        this.timePassed = state.timePassed;
        this.minutesLeft = Math.round(this.timeLeft / 60);
        this.toastingProgress = Math.round(state.timePassed / (state.timeLeft+state.timePassed)*100);
        setTimeout(this.updateProgress, this.UPDATE_INTERVAL);
      }
    })
  }

  UPDATE_INTERVAL = 1000;
  updateProgress() {
    console.log('PROGRESS', this.timeLeft)
    this.timeLeft-=this.UPDATE_INTERVAL;
    this.timePassed+=this.UPDATE_INTERVAL;
    this.minutesLeft = Math.round(this.timeLeft / 60);

    if(this.timeLeft>0) setTimeout(this.updateProgress, this.UPDATE_INTERVAL);
  }

}
