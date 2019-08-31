import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-control',
  templateUrl: './manual-control.component.html',
  styleUrls: ['./manual-control.component.scss']
})
export class ManualControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.connectToServer();
  }

  socket;
  minChannel = 10;
  channels = [1500, 1500, 1500, 1500, 1500, 1500];

  connectToServer() {
    this.socket = new WebSocket("ws://localhost:8765/");
    this.socket.onmessage = (msg) => {
      console.log('WebSocket > '+msg)
    }

    this.socket.onclose = () => {
      console.log('Socket closed')
    }
  }

  add(index) {
    this.channels[index]+=100;
    this.sendMsg(index);
  }

  subtract(index) {
    this.channels[index]-=100;
    this.sendMsg(index);
  }

  sendMsg(index) {
    this.socket.send(`${ this.minChannel + index } ${ this.channels[index] }`);
  }

}
