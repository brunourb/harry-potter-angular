import { Component, OnInit } from '@angular/core';
import { AtoresModel } from '../atores.model';
import { AtoresListService } from './atores-list.service';

@Component({
  selector: 'app-atores-list',
  templateUrl: './atores-list.component.html',
  styleUrls: ['./atores-list.component.css']
})
export class AtoresListComponent implements OnInit {

  atores: AtoresModel[] = [];

  constructor(private service: AtoresListService) { }

  ngOnInit(): void {
    this.service.getAtores().
    subscribe(lista => {
      this.atores = lista;
    });
  }

}
