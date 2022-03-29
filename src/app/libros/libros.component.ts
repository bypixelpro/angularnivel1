import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: any;
  verAutor: String = 'verAutor';
  errorHttp: boolean = false;
  cargando: boolean = false;

  constructor(private http: HttpClient, public Libroclicked: LibroclickedService){

  }
  cargarLista(){
    return this.http.get('assets/lista-libros.json').subscribe({
      next: (respuesta: any) => {this.libros = respuesta; this.cargando = false; },
      error: (respuesta: Response) => {this.errorHttp = true; }
    })
  }
  
  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();
  }

  agregarLibro(_libroVisto: any) {
    this.Libroclicked.libroVisto(_libroVisto);
  }

}
