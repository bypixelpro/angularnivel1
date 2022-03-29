import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  colorLocal: String = 'ese color';

  constructor() {
    
   }

  ngOnInit(): void {
  }

  generarRandom(): String {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  colorHex(): String {
    this.colorLocal = '#' + this.generarRandom();
    return this.colorLocal;
  }

}
