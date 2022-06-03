import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
