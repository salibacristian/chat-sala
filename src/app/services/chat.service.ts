import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';

export interface Chat {
  id: string;
  usuario: string;
  mensaje: string;
  sala: string;
  fecha: string;
}



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private MiAuth: AngularFireAuth,
    private firestore: AngularFirestore) { }


  
  public async UploadToFirestore(chat: Chat) {
  
    this.firestore.collection('chats').add({
      usuario: this.MiAuth.auth.currentUser.email,
      mensaje: chat.mensaje,
      sala: chat.sala,
      fecha: (new Date()).toLocaleString()
    }).then(ref => {
     
    }).catch(err => {
      console.log('Error', err);
    });
  }


  public ObtenerFotos(sala: string) {
    return this.firestore.collection('chats').snapshotChanges().pipe(map((chats) => {
      var chatsFiltrados =  chats.map((a) => {
        const data = a.payload.doc.data() as Chat;
        data.id = a.payload.doc.id;
        return data;
      });
      return chatsFiltrados.filter(function(x){
        return x.sala == sala;
      })
    }));
  }

 

  public getCurrentUser() {
    return this.MiAuth.auth.currentUser.email;
  }

  
}
