import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-debrief-creatif2',
  templateUrl: './debrief-creatif2.component.html',
  styleUrls: ['./debrief-creatif2.component.css']
})
export class DebriefCreatif2Component implements OnInit {

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
