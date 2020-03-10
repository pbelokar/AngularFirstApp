import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-angular7-forms',
  templateUrl: './angular7-forms.component.html',
  styleUrls: ['./angular7-forms.component.css']
})
export class Angular7FormsComponent implements OnInit {

  constructor() { }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done  
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit(): void {
  }

}
