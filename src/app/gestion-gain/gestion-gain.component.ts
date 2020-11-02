import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-gain',
  templateUrl: './gestion-gain.component.html',
  styleUrls: ['./gestion-gain.component.css']
})
export class GestionGainComponent implements OnInit {
  gain : string = "./assets/images/profil_Image/gain.jpg";
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openLg(content) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
}
