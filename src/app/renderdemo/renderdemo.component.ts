import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderdemo',
  templateUrl: './renderdemo.component.html',
  styleUrls: ['./renderdemo.component.css']
})
export class RenderdemoComponent implements OnInit {

  alumnos: any;
  clearElement: any;

  constructor(private ren: Renderer2) {
    this.alumnos = [
      {nombre: 'David', id: 1},
      {nombre: 'Daniel', id: 2},
      {nombre: 'Jose', id: 3},
      {nombre: 'Tamara', id: 4}
    ]
   }

  ngOnInit(): void {
  }
  activeMethod(elemen:HTMLElement) {
    if (this.clearElement){
      this.ren.removeClass(this.clearElement, 'miClass');
    }
    let nuevoElemento = this.ren.createElement('span');
    this.ren.setProperty(nuevoElemento, 'innerHTML', ' loquequeramos');
    this.ren.appendChild(elemen, nuevoElemento);

    this.ren.setAttribute(elemen, 'data-select', 'true');
    this.ren.addClass(elemen, 'miClass');
    this.clearElement = elemen;
  }

}
