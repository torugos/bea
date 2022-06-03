import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  formatLabel(value: number) {
    if (value >= 0) {
      return Math.round(value) + '%';
    }
    return value;
  }

  alertInfo(){
    Swal.fire({
      icon: 'success',
      title: 'Mensagem enviada com sucesso!',
      text: 'Agradecemos o seu contato :)',
      confirmButtonColor: '#60c3d8'
      
    })
  }
}
