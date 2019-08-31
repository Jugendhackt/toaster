import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private settings: SettingsService) { }

  ngOnInit() {
  }

  handleAddressChange(event) {
    this.settings.setToasterAddress(event.target.value)
  }

}
