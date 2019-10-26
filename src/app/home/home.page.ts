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

  ir(sala){
   
    this.publicRouter.navigate([sala]);
  }
}

