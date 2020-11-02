import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalServiceService } from 'src/app/modal-service.service';

@Component({
  selector: 'app-debrief',
  templateUrl: './debrief.component.html',
  styleUrls: ['./debrief.component.css']
})
export class DebriefComponent implements OnInit {
  closeResult = '';
  valider : string = "./assets/images/profil_Image/valider.png";
  attente : string = "./assets/images/profil_Image/attente.png";
 picture : string = "./assets/images/profil_Image/picture.png";
 video : string = "./assets/images/profil_Image/play.png";
 pdf: string = "./assets/images/profil_Image/pdf.png";
 debriefImg: string = "./assets/images/profil_Image/debriefImg.jpg";

  constructor( private modalService:NgbModal) {}

  ngOnInit(): void {
  }

  openXl(content) {
    
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  openlg(content1) {
    this.modalService.open(content1, { size: 'lg',centered: true });
  }
}



  

