import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  titulo: string;
  tPropert: string;
  tEvent: string;
  desc: string;
  tINCUyo: string;
  num1: number = 5;
  num2: number = 10;
  counter: number = 0;

  nAlumno: string;
  nProfesor: string;

  material: string;

  imagen: string;
  tPropet: string;
  tPropet2: string;
  imagen2: string;

  textEvent: string;
  sumaEvent: number;
  suma: number;

  constructor() {
    this.titulo = 'INTERPOLACION';
    this.desc = "Es una forma de hacer binding de datos en el template de un componente.";
    this.nAlumno = 'Ignacio';
    this.nProfesor = 'Nicolás';
    this.material = '';
    this.tPropert = 'PROPERTY BINDING';
    this.imagen = 'https://th.bing.com/th/id/R.415185b3e29bdc8febe085dffd431777?rik=xmxYfmMI7Rd5rw&pid=ImgRaw&r=0';
    this.tPropet = 'Ejemplo 2';
    this.tPropet2 = 'Nombre';
    this.tEvent = 'EVENT BINDING';
    this.textEvent = 'HOLA MUNDO';
    this.tINCUyo = 'INCUYO';
    this.imagen2 = 'https://scontent.fmdz4-1.fna.fbcdn.net/v/t39.30808-6/310373582_495586489245996_7176748967072740212_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rDWZeLg0cToAX-wDsIS&_nc_ht=scontent.fmdz4-1.fna&oh=00_AfDaKHyPS2FmX0KAd6envp3OiEJWXhkBRBI1aveLBTlTNA&oe=64869512';
    this.sumaEvent = 0;
    this.suma = this.num1 + this.num2;
  }

  getMaterial() {
    return this.material = 'Angular';
  }

  cambiarTexto() {
    this.textEvent = 'CHAU MUNDO';
  }


  sumar() {
    this.sumaEvent = this.num1 + this.num2;
  }

}
