import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  isDisabled: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);
  }

  ngOnInit(): void {
  }

}
