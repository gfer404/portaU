import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})



export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  abrirLink(url: string){
    window.open(url, '_blank');
  }

}