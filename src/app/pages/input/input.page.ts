import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre: string = '';
  usuario = {
    email: '',
    phone: '',
    birthdate: new Date(),
  };
  constructor() {}
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  onSubmit(formulario: NgForm) {
    console.log(this.usuario.birthdate);
    console.log(this.calcularEdad() + ' years old'); 
  }

  calcularEdad() {
    const fechaNacimiento = new Date(this.usuario.birthdate);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNacimiento.getMonth();

    // Ajustar la edad en caso de que el cumpleaños no haya ocurrido aún este año
    if (
      mesNacimiento > mesActual ||
      (mesNacimiento === mesActual && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }
    return edad;
  }
}