import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  toasterAddress: string = '';
  maxTime = 0;
  minTime = 0;
  constructor(private settings: SettingsService) { }

  ngOnInit() {
    this.toasterAddress = this.settings.getToasterAddress();
    this.maxTime = this.settings.getSetting('maxTime');
    this.minTime = this.settings.getSetting('minTime');
  }

  handleAddressChange(event) {
    this.settings.setToasterAddress(event.target.value)
    this.toasterAddress = event.target.value;
  }

  handleMaxTimeChange(event) {
    this.settings.setSetting('maxTime', event.target.value);
    this.maxTime = event.target.value;
  }

  handleMinTimeChange(event) {
    this.settings.setSetting('minTime', event.target.value);
    this.minTime = event.target.value;
  }

}
