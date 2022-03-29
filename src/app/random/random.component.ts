import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  miamarillo: string = 'Yellow';

  numRandom: number = Math.floor(Math.random() * 10);

  constructor() { }

  ngOnInit(): void {
  }

}
