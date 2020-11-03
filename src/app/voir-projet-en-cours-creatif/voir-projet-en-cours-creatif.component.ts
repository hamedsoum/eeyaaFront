import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-voir-projet-en-cours-creatif',
  templateUrl: './voir-projet-en-cours-creatif.component.html',
  styleUrls: ['./voir-projet-en-cours-creatif.component.css']
})
export class VoirProjetEnCoursCreatifComponent implements OnInit {
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
