import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styles: [`.Online{color: yellow;}`]
})
export class DynamicStyleComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = 'Offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

  }

  getServerStatus() {
    return this.serverStatus;

  }
  getColor() {
    return this.serverStatus == 'Online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
