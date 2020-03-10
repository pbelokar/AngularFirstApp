import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  constructor() { }

  servers = [];

  OnAddServer() {
    this.servers.push("Another server added " );
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }

  ngOnInit(): void {
  }

}
