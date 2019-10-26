import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-sala4a',
  templateUrl: './sala4a.page.html',
  styleUrls: ['./sala4a.page.scss'],
})
export class Sala4aPage implements OnInit {

  constructor(private subir:ChatService) { }
  todosLosChats=[];

  ngOnInit() {
     this.ObtenerChats();
  }

  private async ObtenerChats() {
    var currentUserEmail = this.subir.getCurrentUser();
    this.subir.ObtenerChats('sala4a').subscribe(async (chats) => {
      this.todosLosChats = chats;
      this.todosLosChats.forEach(function(c){
          if(c.usuario == currentUserEmail)
            c.propio = true;
      });
    });
  }

 


}
