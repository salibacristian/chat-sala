import { Component, OnInit } from '@angular/core';
import { ChatService, Chat } from 'src/app/services/chat.service';

@Component({
  selector: 'app-sala4b',
  templateUrl: './sala4b.page.html',
  styleUrls: ['./sala4b.page.scss'],
})
export class Sala4bPage implements OnInit {

  constructor(private subir: ChatService) { }
  todosLosChats = [];
  mensaje = '';

  ngOnInit() {
    this.ObtenerChats();
  }

  private async ObtenerChats() {
    var currentUserEmail = this.subir.getCurrentUser();
    this.subir.ObtenerChats('sala4b').subscribe(async (chats) => {
      this.todosLosChats = chats;
      this.todosLosChats.forEach(function (c) {
        if (c.usuario == currentUserEmail)
          c.propio = true;
      });
      this.todosLosChats.sort((a, b) => {
        return a.fecha.localeCompare(b.fecha);
      });
    });
  }

  private async enviar() {
    var currentUserEmail = this.subir.getCurrentUser();
    var nuevoChat: Chat = {
      id:'',
      fecha:new Date(),
      mensaje: this.mensaje,
      usuario: currentUserEmail,
      sala: 'sala4b'
    };
    this.mensaje = '';
    this.subir.UploadToFirestore(nuevoChat);
  }

 


}
