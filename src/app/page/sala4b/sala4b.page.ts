import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-sala4b',
  templateUrl: './sala4b.page.html',
  styleUrls: ['./sala4b.page.scss'],
})
export class Sala4bPage implements OnInit {

  constructor(private subir:ChatService) { }
  arrayCosasLindas=[];

  ngOnInit() {
    // this.ObtenerLindasDeBase();
  }

  // private async ObtenerLindasDeBase() {
  //   var currentUserEmail = this.subir.getCurrentUser();
  //   this.subir.ObtenerFotos().subscribe(async (fotos) => {
  //     this.subir.ObtenerVotos().subscribe(async (votos) => {
  //       fotos.forEach(function (foto) {
  //         var votoDeLaFoto = votos.find(function (voto) {
  //           return voto.fotoId == foto.id;
  //         });
  //         var usuarios: Array<string> = JSON.parse(votoDeLaFoto.users);
  //         foto.votadaPorUsuario = usuarios.some(function (email) {
  //           return email == currentUserEmail;
  //         });
  //       });

  //       this.arrayCosasLindas = this.subir.FiltrarFotos(fotos, 'linda');
  //       this.OrderByDate();
  //     });
  //   });
  // }

 


}