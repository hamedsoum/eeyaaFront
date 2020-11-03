import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resultat-final',
  templateUrl: './resultat-final.component.html',
  styleUrls: ['./resultat-final.component.css']
})
export class ResultatFinalComponent implements OnInit {

  valider : string = "./assets/images/profil_Image/valider.png";
  attente : string = "./assets/images/profil_Image/attente.png";
  picture : string = "./assets/images/profil_Image/picture.png";
  video : string = "./assets/images/profil_Image/play.png";
  pdf: string = "./assets/images/profil_Image/pdf.png";
  download: string = "./assets/images/profil_Image/direct-download.png";
  paperclip: string = "./assets/images/profil_Image/paperclip.png";

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openXl(content) {
    
    this.modalService.open(content, { size: 'xl', centered: true });
  }


}
