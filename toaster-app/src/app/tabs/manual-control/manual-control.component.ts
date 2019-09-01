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
  STEP_SIZE = 100;

  connectToServer() {
    this.socket = new WebSocket("ws://172.16.105.168:12345/");
    //this.socket = new WebSocket("ws://localhost:8765/");

    this.socket.onopen = () => {
      console.log('Websocket connected');
      this.socket.send('GET_ABSOLUTE');
    }

    this.socket.onmessage = (msg) => {
      console.log('WebSocket > ', msg.data)
      if(msg.data.split(' ').length == 2) {
        console.log('PIN:', parseInt(msg.data.split(' ')[0]), 'VALUE', parseInt(msg.data.split(' ')[1]))
        this.channels[parseInt(msg.data.split(' ')[0])-this.minChannel] = parseInt(msg.data.split(' ')[1]);
      }
    }

    this.socket.onclose = () => {
      console.log('Socket closed')
    }
  }

  add(index) {
    this.channels[index]+=this.STEP_SIZE;
    this.sendMsg(index, this.STEP_SIZE);
  }

  subtract(index) {
    this.channels[index]-=this.STEP_SIZE;
    this.sendMsg(index, -this.STEP_SIZE);
  }

  sendMsg(index, amount) {
    this.socket.send(`${ this.minChannel + index } ${ amount }`);
  }

}
