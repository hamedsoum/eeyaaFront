import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preselection',
  templateUrl: './preselection.component.html',
  styleUrls: ['./preselection.component.css']
})
export class PreselectionComponent implements OnInit {
  valider : string = "./assets/images/profil_Image/valider.png";
  attente : string = "./assets/images/profil_Image/attente.png";
  picture : string = "./assets/images/profil_Image/picture.png";
  video : string = "./assets/images/profil_Image/play.png";
  pdf: string = "./assets/images/profil_Image/pdf.png";
  debriefImg: string = "./assets/images/profil_Image/debriefImg.jpg";

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  openXl(content2) {
    
    this.modalService.open(content2, { size: 'xl', centered: true });
  }
}
