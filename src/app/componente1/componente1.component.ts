import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  erDNI = '^[0-9]{8}[A-Aa-z]$';
  mostrarIntro ="";
  mostrarIntro2 ="";


  EnviarDatos(nombre, dni, texto){
    if(nombre.value == ""){
      alert("El nombre esta vacio");
    }
    if(dni.match(this.erDNI)){
      this.mostrarIntro="Correcto";
    } else{
      this.mostrarIntro="Incorrecto";
    }
    if(texto.lenght<2){
      this.mostrarIntro2="no_corto";
    } else{
      this.mostrarIntro2="corto";

    }
  }
}
