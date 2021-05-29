import { Livreur } from './../../../models/livreur.model';
import { AdminLivreurService } from './../../../services/admin-livreur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-livreurs',
  templateUrl: './list-livreurs.component.html',
  styleUrls: ['./list-livreurs.component.css'],
})
export class ListLivreursComponent implements OnInit {
  listeLivreurs: Livreur[] = [];
  page: number = 1;
  size: number = 12;
  totalElements: number = 0;

  constructor(private LivreurService: AdminLivreurService) {}

  ngOnInit(): void {
    this.LivreurService.getLivreurs().subscribe(this.processResult());
  }

  processResult() {
    return (data) => {
      this.listeLivreurs = data.content;
      this.page = data.number + 1;
      this.size = data.size;
      this.totalElements = data.totalElements;
    };
  }
}
