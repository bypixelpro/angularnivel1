import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  libros: any;
  libroClick: any;
  libroId: number = 0;
  
  constructor(private rutausuario: ActivatedRoute ){
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ]
     
  }

  ngOnInit(): void {
    this.rutausuario.params.subscribe(params => {
      this.libroId = params['libroId']
      this.libroClick = this.libroBuscador();
    })
  }
  filtroId(libro: any){
    return libro.id == this;
  }
  libroBuscador(){
    return this.libros.filter (this.filtroId, this.libroId) [0];
  }

}
