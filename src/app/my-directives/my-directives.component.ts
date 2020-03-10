import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-my-directives',
  templateUrl: './my-directives.component.html',
  styleUrls: ['./my-directives.component.css']
})
export class MyDirectivesComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created.';
  serverName = 'TestServer';
  serverCreated = false;

  /*constructor() {  
  setTimeout(() =>{  
    this.allowNewServer = true;  
  }, 5000);  
}*/

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server created successfully. Name of the server is :  " + this.serverName;

  }

  OnUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  OnDeleteServer() {
    this.serverCreated = false;
  }

}
