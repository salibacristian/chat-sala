import { Component } from '@angular/core';
import { TestService } from '../service/test.service';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private publicRouter:Router, private subir:ChatService) { }
  aux;
  ngOnInit() {

    
  }
  // tomarFoto(tipo){
    

  //   this.camera.getPicture(camOptions).then(async (pictureAux) => {
  //     // Send the picture to Firebase Storage
  //     this.subir.UploadToFirebase(pictureAux, tipo);
  //   }, error => {
  //     console.log(error);
  //     if (error === 'No Image Selected') {
  //       console.log(error);
  //     } else {
  //       console.log(error);
  //     }
  //     console.log(error);
  //   }).catch(err => {
  //     console.log(err);
  //   });

  // }
  // mover(lugar){
  //   this.aux = this.tomarFoto(lugar);
  //   this.publicRouter.navigate([lugar]);
  // }
}

