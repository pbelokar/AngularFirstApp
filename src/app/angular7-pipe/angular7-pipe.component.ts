import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular7-pipe',
  templateUrl: './angular7-pipe.component.html',
  styleUrls: ['./angular7-pipe.component.css']
})
export class Angular7PipeComponent implements OnInit {
  
  title = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  

  constructor() { }

  ngOnInit(): void {
  }

}
